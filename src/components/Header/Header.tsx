import { NavLink } from "react-router-dom";
import { Barbell, Gear, SignOut, Users } from "@phosphor-icons/react";

import { routesURLs } from "@/routes/Router";

import { ReactComponent as Logo } from "@/assets/Logo.svg";

import * as S from "./Header.styles";
import { useUserContext } from "@/contexts/UserContext";

export function Header() {
  const { loggedUser } = useUserContext();

  const menuLinks = {
    client: [
      <NavLink key="Treinos" to={routesURLs.myWorkouts}>
        <Barbell size={22} weight="bold" />
        Treinos
      </NavLink>,
      // <NavLink key="Configurações" to={routesURLs.config}>
      //   <Gear size={22} weight="bold" />
      //   Configurações
      // </NavLink>,
    ],
    personal: [
      <NavLink key="treinos" to={routesURLs.studentsList}>
        <Barbell size={22} weight="bold" />
        Treinos
      </NavLink>,
      <NavLink key="Cadastro de alunos" to={routesURLs.studentsRegister}>
        <Users size={22} weight="bold" />
        Cadastro de alunos
      </NavLink>,
      // <NavLink key="Configurações" to={routesURLs.config}>
      //   <Gear size={22} weight="bold" />
      //   Configurações
      // </NavLink>,
    ],
  };

  return (
    <S.Wrapper>
      <NavLink
        to={
          loggedUser?.type === "client"
            ? routesURLs.myWorkouts
            : routesURLs.studentsList
        }
      >
        <Logo style={{ width: "140px" }} />
      </NavLink>
      <S.MenuLinksWrapper>
        {menuLinks[loggedUser?.type || "client"]}
        <NavLink key="Sair" to={routesURLs.logout}>
          <SignOut size={22} weight="bold" />
          Sair
        </NavLink>
      </S.MenuLinksWrapper>
    </S.Wrapper>
  );
}
