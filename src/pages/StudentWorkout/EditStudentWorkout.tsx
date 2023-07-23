import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ExerciseType } from "@/utils/types";
import { routesURLs } from "@/routes/Router";

import { Title } from "@/components/DefaultStyles/Typography";
import { Row } from "@/components/DefaultStyles/Row";
import Button from "@/components/Button/Button";

import { defaultWorkout, schema } from "./StudentWorkout.utils";
import { StudentWorkout } from "./StudentWorkout";

import * as S from "./StudentWorkout.styles";
import { useCallback, useEffect, useState } from "react";
import api from "@/services/api";
import { toast } from "react-hot-toast";

export function EditStudentWorkout() {
  const navigate = useNavigate();
  const { studentId, workoutId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const methods = useForm<{ name: string; exercises: ExerciseType[] }>({
    defaultValues: defaultWorkout,
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    api
      .put(`workout?workoutId=${workoutId}`, {
        name: values.name,
        exercises: values.exercises,
      })
      .then(() => {
        toast.success("Treino editado com sucesso!");
        navigate(routesURLs.studentWorkouts.replace(":id", studentId || ""));
      })
      .catch(() => toast.error("Não foi possível criar este treino."));
  };

  const resetAsyncForm = useCallback(async () => {
    const { data } = await api.get(`workouts/${workoutId}`);

    methods.reset({
      name: data.name,
      exercises: data.exercises,
    });
    setIsLoading(false);
  }, [methods.reset]);

  useEffect(() => {
    resetAsyncForm();
  }, []);

  return (
    <FormProvider {...methods}>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
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
              SALVAR ALTERAÇÕES
            </Button>
          </Row>
        </S.FormWrapper>
      )}
    </FormProvider>
  );
}
