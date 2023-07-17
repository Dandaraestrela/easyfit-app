import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";
import { Login } from "@/pages/Login/Login";
import { Logout } from "@/pages/Logout/Logout";
import { MyTrains } from "@/pages/MyTrains/MyTrains";
import { Config } from "@/pages/Config/Config";
import { StudentsList } from "@/pages/StudentsList/StudentsList";
import { StudentsRegister } from "@/pages/StudentsRegister/StudentsRegister";

export const routesURLs = {
  login: "/login",
  logout: "/logout",
  myTrains: "/meus-treinos",
  config: "/configuracoes",
  studentsList: "/listagem-de-alunos",
  studentsRegister: "/cadastro-de-alunos",
};

export function Router() {
  return (
    <Routes>
      <Route path={routesURLs.login} element={<Login />} />
      <Route path={routesURLs.logout} element={<Logout />} />
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={routesURLs.myTrains} element={<MyTrains />} />
        <Route path={routesURLs.config} element={<Config />} />
        <Route path={routesURLs.studentsList} element={<StudentsList />} />
        <Route
          path={routesURLs.studentsRegister}
          element={<StudentsRegister />}
        />
      </Route>
    </Routes>
  );
}
