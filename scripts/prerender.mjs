import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import React from "react";
import { createServer } from "vite";

const distDir = path.resolve("dist");
const vite = await createServer({
  configFile: path.resolve("vite.config.js"),
  server: { middlewareMode: true },
  appType: "custom",
});

function renderToString(element) {
  return new Promise((resolve, reject) => {
    let output = "";
    const destination = new PassThrough();
    destination.setEncoding("utf8");
    destination.on("data", (chunk) => {
      output += chunk;
    });
    destination.on("end", () => resolve(output));
    destination.on("error", reject);

    const stream = renderToPipeableStream(element, {
      onAllReady() {
        stream.pipe(destination);
      },
      onShellError: reject,
      onError(error) {
        reject(error);
      },
    });
  });
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const expression = new RegExp(`<meta\\s+${attribute}="${escapedKey}"[^>]*>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return expression.test(html)
    ? html.replace(expression, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

try {
  const [{ prerenderPaths }, prerenderModule, seoModule] = await Promise.all([
    vite.ssrLoadModule("/src/routes.jsx"),
    vite.ssrLoadModule("/src/prerender-app.jsx"),
    vite.ssrLoadModule("/src/Components/SEO.jsx"),
  ]);
  const template = await readFile(path.join(distDir, "index.html"), "utf8");

  for (const routePath of prerenderPaths) {
    const page = seoModule.getSEOForPath(routePath);
    const markup = await renderToString(await prerenderModule.renderPath(routePath));
    let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(page.title)}</title>`);
    html = replaceMeta(html, "name", "description", page.description);
    html = replaceMeta(html, "property", "og:type", page.structuredData?.["@type"] === "Product" ? "product" : "website");
    html = replaceMeta(html, "property", "og:title", page.title);
    html = replaceMeta(html, "property", "og:description", page.description);
    html = replaceMeta(html, "property", "og:url", page.canonicalUrl);
    html = replaceMeta(html, "property", "og:image", page.imageUrl);
    html = replaceMeta(html, "name", "twitter:title", page.title);
    html = replaceMeta(html, "name", "twitter:description", page.description);
    html = replaceMeta(html, "name", "twitter:image", page.imageUrl);
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${escapeAttribute(page.canonicalUrl)}" />`,
    );
    if (page.structuredData) {
      const jsonLd = JSON.stringify(page.structuredData).replace(/</g, "\\u003c");
      html = html.replace(
        "</head>",
        `    <script id="page-structured-data" type="application/ld+json">${jsonLd}</script>\n  </head>`,
      );
    }
    html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

    const outputPath = routePath === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, routePath.slice(1), "index.html");
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
  console.log(`Prerendered ${prerenderPaths.length} routes.`);
} finally {
  await vite.close();
}
