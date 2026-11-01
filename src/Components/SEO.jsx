/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company, machines } from "../Data/Machines";

export const SITE_URL = "https://nationalengineeringworks.in";
const BUSINESS_SUFFIX = "| National Engineering Works, Solapur";

const pageMetadata = {
  "/": {
    title: "Grain & Pulse Processing Machinery in Solapur | National Engineering Works",
    description:
      "Explore grain and pulse processing machinery made by National Engineering Works in Chincholi MIDC, Solapur, Maharashtra. View equipment and request a quote.",
  },
  "/about": {
    title: `About the Manufacturer ${BUSINESS_SUFFIX}`,
    description:
      "Meet National Engineering Works, a grain and pulse machinery manufacturer based in Chincholi MIDC, Solapur, Maharashtra. Find our location and contact details.",
  },
  "/products": {
    title: `Grain & Dal Mill Machinery ${BUSINESS_SUFFIX}`,
    description:
      "Browse grain and dal mill machinery from National Engineering Works in Solapur, Maharashtra, including cleaning, milling, grading, dust control and conveying equipment.",
  },
  "/services": {
    title: `Dal Mill & Grain Processing Plant Services ${BUSINESS_SUFFIX}`,
    description:
      "Explore grain and pulse processing plant services from National Engineering Works, based in Solapur, Maharashtra. Contact the team to discuss your project requirements.",
  },
  "/privacy": {
    title: `Privacy Policy ${BUSINESS_SUFFIX}`,
    description:
      "Read the privacy policy for National Engineering Works, including how enquiry details are used and how to contact the business in Solapur, Maharashtra.",
  },
  "/terms": {
    title: `Terms & Conditions ${BUSINESS_SUFFIX}`,
    description:
      "Read the terms and conditions for National Engineering Works equipment enquiries and commercial services in Solapur, Maharashtra.",
  },
  "/gallery": {
    title: `Machinery & Plant Gallery ${BUSINESS_SUFFIX}`,
    description:
      "View machinery and plant photographs from National Engineering Works in Solapur, Maharashtra. Contact us to ask about equipment and processing lines.",
  },
  "/quote": {
    title: `Request a Machinery Quote ${BUSINESS_SUFFIX}`,
    description:
      "Send your requirements to National Engineering Works in Solapur, Maharashtra, for grain and pulse processing machinery and plant solutions.",
  },
  "/cleaning-separating": {
    title: `Grain Cleaning & Separation Machines ${BUSINESS_SUFFIX}`,
    description:
      "Explore grain cleaning and separation machines from National Engineering Works in Solapur, Maharashtra, including cleaners, de-stoners and separators.",
  },
  "/milling": {
    title: `Dal & Grain Milling Machines ${BUSINESS_SUFFIX}`,
    description:
      "Find dal and grain milling machines from National Engineering Works in Solapur, Maharashtra. Review equipment for pulse processing and rice milling.",
  },
  "/handling-conveying": {
    title: `Grain Conveyors & Elevators ${BUSINESS_SUFFIX}`,
    description:
      "Explore grain handling equipment from National Engineering Works in Solapur, Maharashtra, including elevators and conveyors for processing plants.",
  },
  "/dust-controlling": {
    title: `Dust Control & Aspiration Equipment ${BUSINESS_SUFFIX}`,
    description:
      "Explore dust control and aspiration equipment from National Engineering Works in Solapur, Maharashtra, including blowers, cyclones and rotary airlocks.",
  },
  "/finishing": {
    title: `Grain & Pulse Grading Machines ${BUSINESS_SUFFIX}`,
    description:
      "Explore grain and pulse finishing and grading machines from National Engineering Works in Solapur, Maharashtra, for sorting and sizing applications.",
  },
  "/turnkey": {
    title: `Dal Mill & Grain Processing Plants ${BUSINESS_SUFFIX}`,
    description:
      "Discuss dal mill and grain processing plant requirements with National Engineering Works in Solapur, Maharashtra. Plant design depends on your crop and capacity needs.",
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setStructuredData(data) {
  const id = "page-structured-data";
  let element = document.getElementById(id);
  if (!data) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export function getSEOForPath(pathname) {
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const slug = normalizedPath.startsWith("/machine/")
    ? normalizedPath.split("/").pop()
    : normalizedPath.slice(1);
  const machine = machines.find((item) => item.slug === slug);
  const metadata = machine
    ? {
        title: `${machine.name} | Grain & Pulse Processing Machine in Solapur, Maharashtra`,
        description: `${machine.desc} Explore the ${machine.name} from National Engineering Works in Solapur, Maharashtra. Contact us for product details and a quote.`,
      }
    : pageMetadata[normalizedPath] || {
        title: `Grain & Pulse Processing Machinery ${BUSINESS_SUFFIX}`,
        description:
          "Explore grain and pulse processing machinery from National Engineering Works in Solapur, Maharashtra.",
      };

  const canonicalSourcePath = machine && normalizedPath.startsWith("/machine/")
    ? `/${machine.slug}`
    : normalizedPath;
  const canonicalPath = canonicalSourcePath === "/" ? "/" : `${canonicalSourcePath}/`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const imageUrl = machine?.img
    ? new URL(machine.img, SITE_URL).href
    : `${SITE_URL}/Images/national-engineering-works-logo.png`;
  const structuredData = machine
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: machine.name,
        description: machine.summary || machine.desc,
        category: machine.category,
        image: imageUrl,
        manufacturer: { "@id": `${SITE_URL}/#business` },
        url: canonicalUrl,
      }
    : normalizedPath === "/"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is National Engineering Works located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: `${company.address}. Contact the team for directions or to discuss a visit.`,
              },
            },
            {
              "@type": "Question",
              name: "What machinery does National Engineering Works make?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The catalogue includes grain cleaning and separation, pulse and rice milling, material handling, dust control, finishing and grading machinery.",
              },
            },
            {
              "@type": "Question",
              name: "How can I request a machinery or plant quote?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Send the crop, process stages, site details and expected throughput using the enquiry form so the team can discuss a suitable machine or plant configuration.",
              },
            },
          ],
        }
      : null;

  return { ...metadata, canonicalUrl, imageUrl, structuredData };
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, canonicalUrl, imageUrl, structuredData } =
      getSEOForPath(pathname);

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:type", structuredData?.["@type"] === "Product" ? "product" : "website");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setStructuredData(structuredData);
  }, [pathname]);

  return null;
}

