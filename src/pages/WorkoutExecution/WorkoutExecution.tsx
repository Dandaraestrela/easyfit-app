import { useNavigate, useParams } from "react-router-dom";
import * as S from "./WorkoutExecution.styles";
import { Title } from "@/components/DefaultStyles/Typography";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Row } from "@/components/DefaultStyles/Row";
import TextInput from "@/components/TextInput/TextInput";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button/Button";
import { routesURLs } from "@/routes/Router";

export function WorkoutExecution() {
  const navigate = useNavigate();
  let { slug, id } = useParams(); // TODO: search por id

  const dataFromObjectMock = {
    exercises: [
      {
        id: 1,
        name: "Corda naval",
        description:
          "Este exercicio deve ser executado pegando a corda e balançando-a",
        repetitions: "3",
        breathing: "20 por 20",
        url: "https://google.com.br",
        isYoutubeUrl: true,
      },
      {
        id: 2,
        name: "Flexao",
        description: "Este exercicio deve ser executado ",
        repetitions: "3",
        breathing: "20 por 20",
        url: "https://google.com.br",
        isYoutubeUrl: true,
      },
    ],
  };
  // TODO: adicionar modal de confirmação se quer concluir ou voltar
  return (
    <S.Wrapper>
      {slug}
      <S.ContentWrapper>
        <Title>Exercícios do treino</Title>
        {dataFromObjectMock.exercises.map((exercise) => (
          <Dropdown key={exercise.id} title={exercise.name}>
            <>
              <Row gap={8}>
                <TextArea
                  label="Descrição"
                  value="valor valorvalorvalorvalorvalor valorvalorvalorvalor valorvalorvalor"
                  isReadOnly
                />
                <TextInput label="Repetições" value="valor" isReadOnly />
                <TextInput label="Respiração" value="valor" isReadOnly />
              </Row>
              <Row gap={8}>
                <a href={"https://google.com.br"} target="_blank">
                  {"https://google.com.br"}
                </a>
              </Row>
            </>
          </Dropdown>
        ))}
      </S.ContentWrapper>
      <Row justifyContent="space-between">
        <Button
          col={4}
          variant="secondary"
          onClick={() => navigate(routesURLs.myWorkouts)}
        >
          Voltar
        </Button>
        <Button col={4}>Concluir treino</Button>
      </Row>
    </S.Wrapper>
  );
}
