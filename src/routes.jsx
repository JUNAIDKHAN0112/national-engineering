/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import { machines } from "./Data/Machines.js";

const Gallery = lazy(() => import("./Components/Gallery/Gallery.jsx"));
const CleaningPage = lazy(() => import("./Components/Products/Cleaning-separating.jsx"));
const DustPage = lazy(() => import("./Components/Products/dust-controlling.jsx"));
const FinishingPage = lazy(() => import("./Components/Products/Finishing.jsx"));
const HandlingPage = lazy(() => import("./Components/Products/handeling-conveying.jsx"));
const MillingPage = lazy(() => import("./Components/Products/Milling.jsx"));
const TurnkeyPage = lazy(() => import("./Components/Products/Turnkey-solutions.jsx"));
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const About = lazy(() => import("./Components/About/About.jsx"));
const Products = lazy(() => import("./Components/Products/Products.jsx"));
const Quote = lazy(() => import("./Components/Quote/Quote.jsx"));
const Services = lazy(() => import("./Components/Services/Services.jsx"));
const MachineDetailTemplate = lazy(() => import("./Components/Machines/MachineDetailTemplate.jsx"));
const PrivacyPolicy = lazy(() => import("./Components/Legal/PrivacyPolicy.jsx"));
const TermsConditions = lazy(() => import("./Components/Legal/TermsConditions.jsx"));

function LoadingFallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="loader" />
    </div>
  );
}

const page = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const productRoutes = machines.map((machine) => ({
  path: machine.slug,
  element: (
    <Suspense fallback={<LoadingFallback />}>
      <MachineDetailTemplate slug={machine.slug} />
    </Suspense>
  ),
}));

const categoryRoutes = [
  { path: "cleaning-separating", element: page(CleaningPage) },
  { path: "milling", element: page(MillingPage) },
  { path: "handling-conveying", element: page(HandlingPage) },
  { path: "dust-controlling", element: page(DustPage) },
  { path: "finishing", element: page(FinishingPage) },
  { path: "turnkey", element: page(TurnkeyPage) },
];

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: page(Home) },
      { path: "about", element: page(About) },
      { path: "products", element: page(Products) },
      { path: "gallery", element: page(Gallery) },
      { path: "quote", element: page(Quote) },
      { path: "services", element: page(Services) },
      { path: "privacy", element: page(PrivacyPolicy) },
      { path: "privacy-policy", element: page(PrivacyPolicy) },
      { path: "terms", element: page(TermsConditions) },
      { path: "terms-and-conditions", element: page(TermsConditions) },
      ...productRoutes,
      { path: "machine/:slug", element: page(MachineDetailTemplate) },
      ...categoryRoutes,
      { path: "Cleaning-separating", element: <Navigate to="/cleaning-separating" replace /> },
      { path: "Milling", element: <Navigate to="/milling" replace /> },
      { path: "Handling-conveying", element: <Navigate to="/handling-conveying" replace /> },
      { path: "Dust-controlling", element: <Navigate to="/dust-controlling" replace /> },
      { path: "Finishing", element: <Navigate to="/finishing" replace /> },
    ],
  },
];

export const prerenderPaths = [
  "/",
  "/about",
  "/products",
  "/gallery",
  "/quote",
  "/services",
  "/privacy",
  "/terms",
  ...categoryRoutes.map(({ path }) => `/${path}`),
  ...machines.map(({ slug }) => `/${slug}`),
];
