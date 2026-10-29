import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./main.css";
import { routes } from "./routes.jsx";

const router = createBrowserRouter(routes);
const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
