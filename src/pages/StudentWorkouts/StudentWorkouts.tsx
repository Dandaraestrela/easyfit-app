import { useNavigate, useParams } from "react-router-dom";
import * as S from "./StudentWorkouts.styles";
import { Title } from "@/components/DefaultStyles/Typography";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { theme } from "@/styles/theme";
import Button from "@/components/Button/Button";
import { routesURLs } from "@/routes/Router";

export function StudentWorkouts() {
  const navigate = useNavigate();
  const { id: studentId } = useParams(); // TODO: search por id
  const workoutsMock = [
    { id: 1, name: "treino perna 1" },
    { id: 2, name: "treino perna 2" },
  ];
  return (
    <S.Wrapper>
      Treinos do aluno de id: {studentId}
      <S.ContentWrapper>
        <Title>Selecione um treino</Title>
        <S.WorkoutsListWrapper>
          {workoutsMock.length ? (
            workoutsMock.map(({ id, name }) => (
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
                            .replace(":id", studentId || "")
                            .replace(":workoutId", `${id}`)
                        )
                      }
                    />
                  </S.ActionsButton>
                  <S.ActionsButton>
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
              routesURLs.createStudentWorkout.replace(":id", studentId || "")
            )
          }
        >
          ADICIONAR TREINO
        </Button>
        <Button col={9.6} variant="secondary">
          VOLTAR
        </Button>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
