import "./theme.css";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "@/components/layout/loaders/index.ts";

const Router = React.lazy(() => import("./router.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Suspense fallback={<Loader.Spinner />}>
      <Router />
    </React.Suspense>
  </StrictMode>
);
