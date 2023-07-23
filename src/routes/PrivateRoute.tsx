import { useUserContext } from "@/contexts/UserContext";
import { Navigate } from "react-router-dom";

export function PrivateRoute({
  children,
  isPersonalRoute,
}: {
  children: React.ReactNode;
  isPersonalRoute?: boolean;
}) {
  const { hasLoggedUser, loggedUser, logoutUser } = useUserContext();

  if (!hasLoggedUser) return <Navigate to="/login" />;

  if (loggedUser?.type === "personal" && isPersonalRoute) return children;

  if (loggedUser?.type === "client" && !isPersonalRoute) return children;

  logoutUser();
  return <Navigate to="/login" />;
}
