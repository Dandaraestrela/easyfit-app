import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";
import { Login } from "@/pages/Login/Login";
import { Logout } from "@/pages/Logout/Logout";
import { MyWorkouts } from "@/pages/MyWorkouts/MyWorkouts";
import { Config } from "@/pages/Config/Config";
import { StudentsList } from "@/pages/StudentsList/StudentsList";
import { StudentsRegister } from "@/pages/StudentsRegister/StudentsRegister";
import { WorkoutExecution } from "@/pages/WorkoutExecution/WorkoutExecution";
import { StudentWorkouts } from "@/pages/StudentWorkouts/StudentWorkouts";
import { EditStudentWorkout } from "@/pages/StudentWorkout/EditStudentWorkout";
import { CreateStudentWorkout } from "@/pages/StudentWorkout/CreateStudentWorkout";

export const routesURLs = {
  login: "/login",
  logout: "/logout",
  myWorkouts: "/meus-treinos",
  workoutExecution: "/meus-treinos/:slug/:id",
  config: "/configuracoes",
  studentsList: "/listagem-de-alunos",
  studentWorkouts: "/listagem-de-alunos/treinos/:id",
  editStudentWorkout: "/listagem-de-alunos/treinos/:id/:workoutId",
  createStudentWorkout: "/listagem-de-alunos/treinos/:id/criar-treino",
  studentsRegister: "/cadastro-de-alunos",
};

export function Router() {
  return (
    <Routes>
      <Route path={routesURLs.login} element={<Login />} />
      <Route path={routesURLs.logout} element={<Logout />} />
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={routesURLs.myWorkouts} element={<MyWorkouts />} />
        <Route path={routesURLs.config} element={<Config />} />
        <Route path={routesURLs.studentsList} element={<StudentsList />} />
        <Route
          path={routesURLs.studentWorkouts}
          element={<StudentWorkouts />}
        />
        <Route
          path={routesURLs.createStudentWorkout}
          element={<CreateStudentWorkout />}
        />
        <Route
          path={routesURLs.editStudentWorkout}
          element={<EditStudentWorkout />}
        />
        <Route
          path={routesURLs.studentsRegister}
          element={<StudentsRegister />}
        />
        <Route
          path={routesURLs.workoutExecution}
          element={<WorkoutExecution />}
        />
      </Route>
    </Routes>
  );
}
