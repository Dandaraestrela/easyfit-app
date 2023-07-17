import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";

import { ContentContainer, LayoutContainer } from "./DefaultLayout.styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
}
