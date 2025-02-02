import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}