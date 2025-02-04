import { Dash, Home } from "./pages";
import { PrivateProvider } from "./context/private";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dash"
          element={
            <PrivateProvider>
              <Dash.Layout />
            </PrivateProvider>
          }
        >
          <Route index path="" element={<Dash.Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
