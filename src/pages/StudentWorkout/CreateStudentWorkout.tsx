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

export function CreateStudentWorkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const methods = useForm<{ exercises: ExerciseType[] }>({
    defaultValues: { exercises: [] },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
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
              navigate(routesURLs.studentWorkouts.replace(":id", id || ""))
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
