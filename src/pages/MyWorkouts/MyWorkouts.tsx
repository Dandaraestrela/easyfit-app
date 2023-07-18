import { Table } from "@/components/Table/Table";
import { Title } from "@/components/DefaultStyles/Typography";

import ActionsContent from "@/components/Table/TableCellTypes/ActionsContent";
import DefaultContent from "@/components/Table/TableCellTypes/DefaultContent";

import * as S from "./MyWorkouts.styles";
import { useNavigate } from "react-router-dom";
import { routesURLs } from "@/routes/Router";

const tableData = [
  {
    id: 1,
    registerDate: "01/02/2020",
    slug: "TreinoPerna1",
    name: "Treino perna 1",
    timesExecuted: 1,
  },
  {
    id: 2,
    registerDate: "01/02/2020",
    slug: "TreinoPerna2",
    name: "Treino perna 2",
    timesExecuted: 1,
  },
  {
    id: 3,
    registerDate: "01/02/2020",
    slug: "TreinoPerna3",
    name: "Treino perna 3",
    timesExecuted: 1,
  },
  {
    id: 4,
    registerDate: "01/02/2020",
    slug: "TreinoPerna4",
    name: "Treino perna 4",
    timesExecuted: 1,
  },
];

export function MyWorkouts() {
  const navigate = useNavigate();
  const headers = [
    {
      title: "Cadastro",
      accessor: "registerDate",
      cellType: (data: (typeof tableData)[0]) => (
        <DefaultContent cellData={data.registerDate} />
      ),
    },
    {
      title: "Nome",
      accessor: "name",
      cellType: (data: (typeof tableData)[0]) => (
        <DefaultContent cellData={data.name} />
      ),
    },
    {
      title: "Executado",
      accessor: "timesExecuted",
      cellType: (data: (typeof tableData)[0]) => (
        <DefaultContent cellData={data.timesExecuted} />
      ),
    },
    {
      title: "Ações",
      accessor: "actions",
      width: "160px",
      cellType: (data: (typeof tableData)[0]) => (
        <ActionsContent
          cellData={data}
          buttons={[
            {
              title: "Acessar treino",
              action: (data) =>
                navigate(
                  routesURLs.workoutExecution
                    .replace(":slug", data.slug)
                    .replace(":id", data.id)
                ),
            },
          ]}
        />
      ),
    },
  ];
  return (
    <S.Wrapper>
      <Title>Listagem de Alunos</Title>
      <Table headers={headers} data={tableData} />
    </S.Wrapper>
  );
}
