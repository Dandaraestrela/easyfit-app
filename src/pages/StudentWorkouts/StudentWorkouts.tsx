import { useNavigate, useParams } from "react-router-dom";
import * as S from "./StudentWorkouts.styles";
import { Title } from "@/components/DefaultStyles/Typography";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { theme } from "@/styles/theme";
import Button from "@/components/Button/Button";
import { routesURLs } from "@/routes/Router";
import { useEffect, useState } from "react";
import { User } from "@/utils/types";
import api from "@/services/api";
import { toast } from "react-hot-toast";

interface SimpleWorkoutType {
  id: string;
  name: string;
}

export function StudentWorkouts() {
  const navigate = useNavigate();
  const { id: studentId } = useParams(); // TODO: search por id
  const [studentName, setStudentName] = useState<string>("");
  const [studentWorkouts, setStudentWorkouts] = useState<SimpleWorkoutType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const listWorkouts = async () => {
    await api
      .get(`workouts/client?clientId=${studentId}`)
      .then((response) => {
        setStudentWorkouts(response.data.workouts);
        // Todo setare os loaidng como false no erro no resto do sistema
        setIsLoading(false);
      })
      .catch((err) =>
        toast.error("Não foi possível carregar a lista de treinos")
      );
  };

  const onDeleteExercise = (id: string) => {
    api
      .delete(`workout?workoutId=${id}`)
      .then(() => {
        listWorkouts();
        toast.success("Treino apagado com sucesso!");
      })
      .catch((e) => toast.error("Não foi possível deletar este treino."));
  };

  useEffect(() => {
    const getStudentInfo = async () => {
      await api
        .get(`users/clients/${studentId}`)
        .then((response) => {
          setStudentName(response.data.client.name);
        })
        .catch((err) =>
          toast.error("Não foi possível carregar as informações.")
        );

      await listWorkouts();
    };

    getStudentInfo();
  }, []);

  return (
    <S.Wrapper>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          Treinos de: {studentName}
          <S.ContentWrapper>
            <Title>Selecione um treino</Title>
            <S.WorkoutsListWrapper>
              {studentWorkouts.length ? (
                studentWorkouts.map(({ id, name }) => (
                  <S.WorkoutWrapper key={id}>
                    {name}
                    <S.WorkoutActionsWrapper>
                      <S.ActionsButton>
                        <PencilSimpleLine
                          size={20}
                          color={theme.colors.redDark}
                          weight="bold"
                          onClick={() =>
                            navigate(
                              routesURLs.editStudentWorkout
                                .replace(":studentId", studentId || "")
                                .replace(":workoutId", `${id}`)
                            )
                          }
                        />
                      </S.ActionsButton>
                      <S.ActionsButton onClick={() => onDeleteExercise(id)}>
                        <Trash
                          size={20}
                          color={theme.colors.redDark}
                          weight="bold"
                        />
                      </S.ActionsButton>
                    </S.WorkoutActionsWrapper>
                  </S.WorkoutWrapper>
                ))
              ) : (
                <Title>Este aluno ainda não tem nenhum treino!</Title>
              )}
            </S.WorkoutsListWrapper>
            <Button
              col={9.6}
              onClick={() =>
                navigate(
                  routesURLs.createStudentWorkout.replace(
                    ":studentId",
                    studentId || ""
                  )
                )
              }
            >
              ADICIONAR TREINO
            </Button>
            <Button
              col={9.6}
              variant="secondary"
              onClick={() => navigate(routesURLs.studentsList)}
            >
              VOLTAR
            </Button>
          </S.ContentWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
