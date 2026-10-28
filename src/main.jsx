/* eslint-disable react-refresh/only-export-components */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import "./main.css";
const Gallery = lazy(() => import("./Components/Gallery/Gallery.jsx"));
// Lazy-loaded components for products
const CleaningPage = lazy(() => import("./Components/Products/Cleaning-separating.jsx"));
const DustPage = lazy(() => import("./Components/Products/dust-controlling.jsx"));
const FinishingPage = lazy(() => import("./Components/Products/Finishing.jsx"));
const HandlingPage = lazy(() => import("./Components/Products/handeling-conveying.jsx"));
const MillingPage = lazy(() => import("./Components/Products/Milling.jsx"));
const TurnkeyPage = lazy(() => import("./Components/Products/Turnkey-solutions.jsx"));

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const About = lazy(() => import("./Components/About/About.jsx"));
const AdvancedMachinesPage = lazy(() => import("./Components/Products/Products.jsx"));
const GetQuote = lazy(() => import("./Components/Quote/Quote.jsx"));
const Services = lazy(() => import("./Components/Services/Services.jsx"));
const DestonerMachine = lazy(() => import("./Components/Machines/Destoner.jsx"));
const ElevatorMachine = lazy(() => import("./Components/Machines/Elevator.jsx"));
const HorizontalCycloneMachine = lazy(() => import("./Components/Machines/Cyclone.jsx"));
const FatkaMachinePage = lazy(() => import("./Components/Machines/Fatka.jsx"));
const BuffPolisherPage = lazy(() => import("./Components/Machines/Buff.jsx"));
const DalPolisherPage = lazy(() => import("./Components/Machines/Dal.jsx"));
const ScrewConveyorPage = lazy(() => import("./Components/Machines/Coneyor.jsx"));
const BlowerMachine = lazy(() => import("./Components/Machines/Blower.jsx"));
const RotaryAirlockPage = lazy(() => import("./Components/Machines/Rotary.jsx"));
const RillMachine = lazy(() => import("./Components/Machines/Rill.jsx"));
// Custom loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    {/* <p className=" loader text-xl font-semibold ui loader">Loading...</p> */}
     <span className="loader"></span>
  </div>
);

// Router setup with lazy-loaded routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AdvancedMachinesPage />
          </Suspense>
        }
      />
      <Route
        path="/gallery"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Gallery />
          </Suspense>
        }
      />
      <Route
        path="/quote"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <GetQuote />
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="/destoner"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <DestonerMachine />
          </Suspense>
        }
      />
      <Route
        path="/elevator"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ElevatorMachine />
          </Suspense>
        }
      />
      <Route
        path="/cyclone"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <HorizontalCycloneMachine />
          </Suspense>
        }
      />
      <Route
        path="/fatka"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <FatkaMachinePage />
          </Suspense>
        }
      />
      <Route
        path="/buff"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BuffPolisherPage />
          </Suspense>
        }
      />
      <Route
        path="/dal"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <DalPolisherPage />
          </Suspense>
        }
      />
      <Route
        path="/conveyor"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ScrewConveyorPage />
          </Suspense>
        }
      />
      <Route
        path="/blower"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlowerMachine />
          </Suspense>
        }
      />
      <Route
        path="/rotary"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <RotaryAirlockPage />
          </Suspense>
        }
      />
      <Route
        path="/rill"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <RillMachine />
          </Suspense>
        }
      />
      <Route
        path="/turnkey"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <TurnkeyPage />
          </Suspense>
        }
      />

      <Route
        path="/Milling"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <MillingPage />
          </Suspense>
        }
      />

      <Route
        path="/Handling-conveying"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <HandlingPage />
          </Suspense>
        }
      />

      <Route
        path="/Finishing"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <FinishingPage />
          </Suspense>
        }
      />

      <Route
        path="/Dust-controlling"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <DustPage />
          </Suspense>
        }
      />  


      <Route
        path="/Cleaning-separating"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <CleaningPage />
          </Suspense>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

