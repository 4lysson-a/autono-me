import { BrowserRouter, Route, Routes } from "react-router";
import { Dash, Home } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dash" element={<Dash.Layout />}>
          <Route path="home" element={<Dash.Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
