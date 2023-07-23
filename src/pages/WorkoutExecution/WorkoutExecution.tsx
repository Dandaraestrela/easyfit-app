import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import { Title } from "@/components/DefaultStyles/Typography";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Row } from "@/components/DefaultStyles/Row";
import TextInput from "@/components/TextInput/TextInput";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button/Button";
import { routesURLs } from "@/routes/Router";
import api from "@/services/api";
import { ExerciseType } from "@/utils/types";

import * as S from "./WorkoutExecution.styles";
interface WorkoutType {
  name: string;
  executed: number;
  exercises: ExerciseType[];
}

export function WorkoutExecution() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [workoutInfo, setWorkoutInfo] = useState<WorkoutType | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  const onConludeWorkout = () => {
    const toastId = toast.loading("Carregando...");
    api
      .put(`workout/executions?workoutId=${id}`, {
        executed: (workoutInfo?.executed || 0) + 1,
      })
      .then(() => {
        toast.dismiss(toastId);
        toast.success("Treino concluído com sucesso");
        navigate(routesURLs.myWorkouts);
      })
      .catch(() => {
        toast.dismiss(toastId);
        toast.error("Não foi possível concluir este treino");
      });
  };

  useEffect(() => {
    api
      .get(`workouts/${id}`)
      .then(({ data }) => {
        setWorkoutInfo({
          name: data.name,
          executed: data.executed,
          exercises: data.exercises,
        });
        setIsLoading(false);
      })
      .catch(() =>
        toast.error("Não foi possível acessar esse treino no momento.")
      );
  }, []);

  // TODO: adicionar modal de confirmação se quer concluir ou voltar
  return (
    <S.Wrapper>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          {workoutInfo?.name}
          <S.ContentWrapper>
            <Title>Exercícios do treino</Title>
            {workoutInfo?.exercises.map((exercise) => (
              <Dropdown key={exercise.id} title={exercise.name}>
                <>
                  <Row $gap={8}>
                    <TextInput
                      label="Nome do exercício"
                      value={exercise.name}
                      isReadOnly
                    />
                    <TextInput
                      label="Respiração"
                      value={exercise.breathing}
                      isReadOnly
                    />
                    <TextInput
                      label="Repetições"
                      value={exercise.repetitions}
                      isReadOnly
                    />
                  </Row>
                  <Row $gap={8}>
                    <TextArea
                      label="Descrição"
                      value={exercise.description}
                      isReadOnly
                    />
                  </Row>
                  <Row $gap={8}>
                    <a href={exercise.link} target="_blank">
                      Clique aqui para acessar vídeo explicativo sobre o
                      exercício!
                    </a>
                  </Row>
                </>
              </Dropdown>
            ))}
          </S.ContentWrapper>
          <Row $justifyContent="space-between">
            <Button
              col={4}
              variant="secondary"
              onClick={() => navigate(routesURLs.myWorkouts)}
            >
              Voltar
            </Button>
            <Button col={4} onClick={() => onConludeWorkout()}>
              Concluir treino
            </Button>
          </Row>
        </>
      )}
    </S.Wrapper>
  );
}
