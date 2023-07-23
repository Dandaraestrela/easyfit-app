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
import { PrivateRoute } from "./PrivateRoute";

export const routesURLs = {
  login: "/login",
  logout: "/logout",
  myWorkouts: "/meus-treinos",
  workoutExecution: "/meus-treinos/:id",
  config: "/configuracoes",
  studentsList: "/listagem-de-alunos",
  studentWorkouts: "/listagem-de-alunos/treinos/:id",
  editStudentWorkout: "/listagem-de-alunos/treinos/:studentId/:workoutId",
  createStudentWorkout: "/listagem-de-alunos/treinos/:studentId/criar-treino",
  studentsRegister: "/cadastro-de-alunos",
};

export function Router() {
  return (
    <Routes>
      <Route path={routesURLs.login} element={<Login />} />
      <Route path={routesURLs.logout} element={<Logout />} />
      <Route path={"/"} element={<DefaultLayout />}>
        <Route
          path={routesURLs.myWorkouts}
          element={
            <PrivateRoute>
              <MyWorkouts />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.config}
          element={
            <PrivateRoute>
              <Config />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.studentsList}
          element={
            <PrivateRoute isPersonalRoute>
              <StudentsList />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.studentWorkouts}
          element={
            <PrivateRoute isPersonalRoute>
              <StudentWorkouts />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.createStudentWorkout}
          element={
            <PrivateRoute isPersonalRoute>
              <CreateStudentWorkout />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.editStudentWorkout}
          element={
            <PrivateRoute isPersonalRoute>
              <EditStudentWorkout />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.studentsRegister}
          element={
            <PrivateRoute isPersonalRoute>
              <StudentsRegister />
            </PrivateRoute>
          }
        />
        <Route
          path={routesURLs.workoutExecution}
          element={
            <PrivateRoute>
              <WorkoutExecution />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
