import { Dash, Home } from "./pages";
import { PrivateProvider } from "./context/private";
import { BrowserRouter, Route, Routes } from "react-router";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <PrivateProvider>
          <Route path="/dash" element={<Dash.Layout />}>
            <Route path="home" element={<Dash.Home />} />
          </Route>
        </PrivateProvider>
      </Routes>
    </BrowserRouter >
  );
};
