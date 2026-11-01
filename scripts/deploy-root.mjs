import { cp, rm, readdir } from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve(".");
const distDir = path.resolve("dist");

// 1. Copy dist/index.html to root
await cp(path.join(distDir, "index.html"), path.join(rootDir, "index.html"));

// 2. Clean and sync ./assets/
await rm(path.join(rootDir, "assets"), { recursive: true, force: true });
await cp(path.join(distDir, "assets"), path.join(rootDir, "assets"), { recursive: true });

// 3. Sync all route directories (about, products, quote, etc.)
const distEntries = await readdir(distDir, { withFileTypes: true });
for (const entry of distEntries) {
  if (entry.isDirectory() && entry.name !== "assets" && entry.name !== "Images" && entry.name !== "media") {
    const targetDir = path.join(rootDir, entry.name);
    await rm(targetDir, { recursive: true, force: true });
    await cp(path.join(distDir, entry.name), targetDir, { recursive: true });
  }
}

// 4. Sync public static root files (.htaccess, robots.txt, sitemap.xml, llms.txt, favicon, etc.)
for (const file of [".htaccess", "robots.txt", "sitemap.xml", "llms.txt", "favicon.ico", "favicon.png", "vite.svg"]) {
  try {
    await cp(path.join(distDir, file), path.join(rootDir, file));
  } catch {}
}

// 5. Ensure Images and media in root are up to date
try {
  await cp(path.join(distDir, "media"), path.join(rootDir, "media"), { recursive: true });
} catch {}
try {
  await cp(path.join(distDir, "Images"), path.join(rootDir, "Images"), { recursive: true });
} catch {}

console.log("Successfully synced dist build output to repository root for Hostinger!");
