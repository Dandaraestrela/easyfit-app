import { Table } from "@/components/Table/Table";
import ActionsContent from "@/components/Table/TableCellTypes/ActionsContent";
import DefaultContent from "@/components/Table/TableCellTypes/DefaultContent";

const tableData = [
  { teste: "teste 1", teste2: "teste 1 2", teste3: "teste 1 2" },
  { teste: "teste 2", teste2: "teste 1 2", teste3: "teste 1 2" },
  { teste: "teste 3", teste2: "teste 1 2", teste3: "teste 1 2" },
];

const headers = [
  {
    title: "teste",
    accessor: "teste",
    cellType: (data: (typeof tableData)[0]) => (
      <DefaultContent cellData={data.teste} />
    ),
  },
  {
    title: "teste 2",
    accessor: "teste2",
    cellType: (data: (typeof tableData)[0]) => (
      <DefaultContent cellData={data.teste} />
    ),
  },
  {
    title: "teste 3",
    accessor: "teste3",
    cellType: (data: (typeof tableData)[0]) => (
      <DefaultContent cellData={data.teste} />
    ),
  },
  {
    title: "teste 3",
    accessor: "actions",
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
    <div>
      <Table headers={headers} data={tableData} />
    </div>
  );
}
