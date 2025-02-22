import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export const Home = () => {
    const { loginWithRedirect } = useAuth0();
    useEffect(() => {
      // Atualiza o título do documento usando a API do browser
      loginWithRedirect()
    });
  
  
    return <Button onClick={() => loginWithRedirect()}>Se não for direcionado ao login clique aqui </Button>;
  };