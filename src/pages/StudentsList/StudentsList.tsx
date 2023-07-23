import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import api from "@/services/api";

import { Table } from "@/components/Table/Table";
import ActionsContent from "@/components/Table/TableCellTypes/ActionsContent";
import DefaultContent from "@/components/Table/TableCellTypes/DefaultContent";
import { Title } from "@/components/DefaultStyles/Typography";

import { routesURLs } from "@/routes/Router";

import { useUserContext } from "@/contexts/UserContext";

import * as S from "./StudentsList.styles";

export function StudentsList() {
  const navigate = useNavigate();
  const { loggedUser } = useUserContext();
  const [studentsList, setStudentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const listStudents = () => {
    api
      .get(`users/personals/clients?personalId=${loggedUser?.id}`)
      .then((response) => {
        setStudentsList(response.data.clients);
        setIsLoading(false);
      })
      .catch(() => toast.error("Não foi possível carregar a lista de alunos"));
  };

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
      title: "Usuário",
      accessor: "username",
      cellType: (data: any) => <DefaultContent cellData={data.username} />,
    },
    // TODO
    // {
    //   title: "Qnt. Treinos",
    //   accessor: "workouts",

    //   cellType: (data: any) => (
    //     <DefaultContent cellData={data.workouts.length} />
    //   ),
    // },
    {
      title: "Ações",
      accessor: "actions",
      width: "360px",
      cellType: (data: any) => (
        <ActionsContent
          cellData={data}
          buttons={[
            {
              title: "Editar treinos",
              action: (data) =>
                navigate(routesURLs.studentWorkouts.replace(":id", data.id)),
            },
            {
              title: "Resetar senha",
              action: (data) => {
                api
                  .put(`users/client/password-reset?clientId=${data.id}`, {
                    newPassword: "easyfitapp",
                  })
                  .then(() => {
                    listStudents();
                    toast.success("Senha alterada para a default: easyfitapp");
                  })
                  .catch(() => {
                    toast.error("Não foi possível resetar a senha do usuário");
                  });
              },
            },
            {
              title: "Excluir usuário",
              action: (data) => {
                api
                  .delete(`users/client?clientId=${data.id}`)
                  .then(() => {
                    listStudents();
                    toast.success("Usuário deletado");
                  })
                  .catch(() => {
                    toast.error("Não foi possível deletar o usuário");
                  });
              },
            },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    listStudents();
  }, []);
  return (
    <S.Wrapper>
      <Title>Listagem de Alunos</Title>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <Table headers={headers} data={studentsList} />
      )}
    </S.Wrapper>
  );
}
