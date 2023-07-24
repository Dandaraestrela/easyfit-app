import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header/Header";

import { ContentContainer, LayoutContainer } from "./DefaultLayout.styles";
import { useUserContext } from "@/contexts/UserContext";
import { routesURLs } from "@/routes/Router";
import { useEffect } from "react";

export function DefaultLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { hasLoggedUser, loggedUser } = useUserContext();

  useEffect(() => {
    if (!hasLoggedUser) {
      navigate(routesURLs.login);
    } else {
      if (location.pathname === "/" && loggedUser?.type === "client")
        navigate(routesURLs.myWorkouts);

      if (location.pathname === "/" && loggedUser?.type === "personal")
        navigate(routesURLs.studentsList);
    }
  }, []);

  return (
    <>
      {hasLoggedUser && (
        <LayoutContainer>
          <Header />
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </LayoutContainer>
      )}
    </>
  );
}
