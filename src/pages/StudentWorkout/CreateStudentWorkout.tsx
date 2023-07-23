import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ExerciseType } from "@/utils/types";
import { routesURLs } from "@/routes/Router";

import { Title } from "@/components/DefaultStyles/Typography";
import { Row } from "@/components/DefaultStyles/Row";
import Button from "@/components/Button/Button";

import { schema } from "./StudentWorkout.utils";
import { StudentWorkout } from "./StudentWorkout";

import * as S from "./StudentWorkout.styles";
import api from "@/services/api";
import { useUserContext } from "@/contexts/UserContext";
import { toast } from "react-hot-toast";

export function CreateStudentWorkout() {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const { loggedUser } = useUserContext();
  const methods = useForm<{ name: String; exercises: ExerciseType[] }>({
    defaultValues: { name: "", exercises: [] },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    api
      .post("workouts", {
        personalId: loggedUser?.id,
        clientId: studentId,
        name: values.name,
        exercises: values.exercises.map((exercise) => ({
          name: exercise.name,
          repetitions: exercise.repetitions,
          link: exercise.link,
          breathing: exercise.breathing,
          description: exercise.description,
        })),
      })
      .then(() => {
        toast.success("Treino criado com sucesso!");
        navigate(routesURLs.studentWorkouts.replace(":id", studentId || ""));
      })
      .catch((err) => toast.error("Não foi possível criar este treino."));
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <Title>Novo treino</Title>
        <StudentWorkout />
        <Row $justifyContent="space-between">
          <Button
            type="button"
            variant="secondary"
            col={4}
            onClick={() =>
              navigate(
                routesURLs.studentWorkouts.replace(":id", studentId || "")
              )
            }
          >
            VOLTAR
          </Button>
          <Button type="submit" col={4}>
            Criar treino
          </Button>
        </Row>
      </S.FormWrapper>
    </FormProvider>
  );
}
