import { useUserContext } from "@/contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();
  const { logoutUser } = useUserContext();

  useEffect(() => {
    logoutUser();
    navigate("/login");
  }, []);
  return <h1>Saindo do easyfit...</h1>;
}
