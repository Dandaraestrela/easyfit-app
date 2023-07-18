import { Table } from "@/components/Table/Table";
import ActionsContent from "@/components/Table/TableCellTypes/ActionsContent";
import DefaultContent from "@/components/Table/TableCellTypes/DefaultContent";

import * as S from "./StudentsList.styles";
import { Title } from "@/components/DefaultStyles/Typography";

const tableData = [
  {
    id: 1,
    registerDate: "01/02/2020",
    name: "Dandara Estrela",
    username: "DandaraEstrela",
    workouts: [],
  },
  {
    id: 2,
    registerDate: "01/02/2020",
    name: "Dandara Estrela",
    username: "DandaraEstrela",
    workouts: [],
  },
  {
    id: 3,
    registerDate: "01/02/2020",
    name: "Dandara Estrela",
    username: "DandaraEstrela",
    workouts: [],
  },
  {
    id: 4,
    registerDate: "01/02/2020",
    name: "Dandara Estrela",
    username: "DandaraEstrela",
    workouts: [],
  },
];

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
    title: "Usuário",
    accessor: "username",
    cellType: (data: (typeof tableData)[0]) => (
      <DefaultContent cellData={data.username} />
    ),
  },
  {
    title: "Qnt. Treinos",
    accessor: "workouts",

    cellType: (data: (typeof tableData)[0]) => (
      <DefaultContent cellData={data.workouts.length} />
    ),
  },
  {
    title: "Ações",
    accessor: "actions",
    width: "360px",
    cellType: (data: (typeof tableData)[0]) => (
      <ActionsContent
        cellData={data}
        buttons={[
          { title: "Editar treinos", action: (data) => console.log(data) },
          { title: "Resetar senha", action: (data) => console.log(data) },
          { title: "Excluir usuário", action: (data) => console.log(data) },
        ]}
      />
    ),
  },
];

export function StudentsList() {
  return (
    <S.Wrapper>
      <Title>Listagem de Alunos</Title>
      <Table headers={headers} data={tableData} />
    </S.Wrapper>
  );
}
