import "./theme.css";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "@/components/layout/loaders/index.ts";
import { Auth0Provider } from '@auth0/auth0-react';

const Router = React.lazy(() => import("./router.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-y4yqfl70bf14wx2e.us.auth0.com"
    clientId="2kF48CckAudq3YN5lhfPf1gEX3O9WgXB"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/dash"
    }}
  >
    <React.Suspense fallback={<Loader.Spinner />}>
      <Router />
    </React.Suspense>
    </Auth0Provider>
  </StrictMode>
);
