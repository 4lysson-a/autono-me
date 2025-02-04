import { Navigate } from "react-router";

type Provider = {
  children: React.ReactNode;
}

export const Private = ({ children }: Provider) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/" />;
};

export const PrivateProvider: React.FC<Provider> = ({ children }) => {
  return <Private>{children}</Private>;
};