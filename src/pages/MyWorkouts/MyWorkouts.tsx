import { Table } from "@/components/Table/Table";
import { Title } from "@/components/DefaultStyles/Typography";

import ActionsContent from "@/components/Table/TableCellTypes/ActionsContent";
import DefaultContent from "@/components/Table/TableCellTypes/DefaultContent";

import * as S from "./MyWorkouts.styles";
import { useNavigate } from "react-router-dom";
import { routesURLs } from "@/routes/Router";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { useUserContext } from "@/contexts/UserContext";
import { toast } from "react-hot-toast";

export function MyWorkouts() {
  const navigate = useNavigate();
  const { loggedUser } = useUserContext();
  const [workoutsList, setWorkoutsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const headers = [
    {
      title: "Cadastro",
      accessor: "createdAt",
      cellType: (data: any) => <DefaultContent cellData={data.createdAt} />,
    },
    {
      title: "Nome",
      accessor: "name",
      cellType: (data: any) => <DefaultContent cellData={data.name} />,
    },
    {
      title: "Executado",
      accessor: "executed",
      cellType: (data: any) => <DefaultContent cellData={data.executed} />,
    },
    {
      title: "Ações",
      accessor: "actions",
      width: "160px",
      cellType: (data: any) => (
        <ActionsContent
          cellData={data}
          buttons={[
            {
              title: "Acessar treino",
              action: (data) =>
                navigate(routesURLs.workoutExecution.replace(":id", data.id)),
            },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    api
      .get(`workouts/client?clientId=${loggedUser?.id}`)
      .then((response) => {
        setWorkoutsList(response.data.workouts);
        setIsLoading(false);
      })
      .catch((error) =>
        toast.error("Não foi possível carregar a lista de treinos")
      );
  }, []);
  return (
    <S.Wrapper>
      <Title>Meus treinos</Title>
      {isLoading ? (
        "Loading..."
      ) : (
        <Table headers={headers} data={workoutsList} />
      )}
    </S.Wrapper>
  );
}
