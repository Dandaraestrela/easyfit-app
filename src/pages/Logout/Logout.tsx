import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    // TODO: remover credenciais quando logout
  }, []);
  return <h1>Saindo do easyfit...</h1>;
}
