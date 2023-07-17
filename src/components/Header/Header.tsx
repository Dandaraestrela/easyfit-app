import { NavLink } from "react-router-dom";
import { Barbell, Gear, SignOut, Users } from "@phosphor-icons/react";

import { routesURLs } from "@/routes/Router";

import { ReactComponent as Logo } from "@/assets/Logo.svg";

import * as S from "./Header.styles";

export function Header() {
  const userType = "trainer";

  const menuLinks = {
    student: [
      <NavLink to={routesURLs.myTrains}>
        <Barbell size={22} weight="bold" />
        Treinos
      </NavLink>,
      <NavLink to={routesURLs.config}>
        <Gear size={22} weight="bold" />
        Configurações
      </NavLink>,
    ],
    trainer: [
      <NavLink to={routesURLs.studentsList}>
        <Barbell size={22} weight="bold" />
        Treinos
      </NavLink>,
      <NavLink to={routesURLs.studentsRegister}>
        <Users size={22} weight="bold" />
        Cadastro de alunos
      </NavLink>,
      <NavLink to={routesURLs.config}>
        <Gear size={22} weight="bold" />
        Configurações
      </NavLink>,
    ],
  };

  return (
    <S.Wrapper>
      <NavLink
        to={
          userType === "student" ? routesURLs.myTrains : routesURLs.studentsList
        }
      >
        <Logo style={{ width: "140px" }} />
      </NavLink>
      <S.MenuLinksWrapper>
        {menuLinks[userType]}
        <NavLink to={routesURLs.logout}>
          <SignOut size={22} weight="bold" />
          Sair
        </NavLink>
      </S.MenuLinksWrapper>
    </S.Wrapper>
  );
}
