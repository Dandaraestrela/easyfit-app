import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Row } from "@/components/DefaultStyles/Row";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";

import * as S from "./StudentsRegister.styles";
import api from "@/services/api";
import { useUserContext } from "@/contexts/UserContext";
import { toast } from "react-hot-toast";

export const schema = Yup.object({
  name: Yup.string().required("Campo obrigatório"),
  username: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export function StudentsRegister() {
  const { loggedUser } = useUserContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", username: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    const toastId = toast.loading("Carregando...");
    try {
      await api.post("users/client", {
        username: values.username,
        password: values.password,
        name: values.name,
        personal_id: loggedUser?.id,
      });
      toast.dismiss(toastId);
      toast.success("Usuário cadastrado com sucesso!");
      reset();
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Falha no cadastro");
    }
  };
  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      Cadastrar novo aluno
      <S.ContentWrapper>
        <Row $gap={8}>
          <TextInput
            label="Nome"
            {...register("name")}
            error={errors.name?.message}
          />
          <TextInput
            label="Username"
            {...register("username")}
            error={errors.username?.message}
          />
          <TextInput
            label="Senha"
            {...register("password")}
            error={errors.password?.message}
          />
        </Row>
        <Row $justifyContent="center">
          <Button type="submit" col={6}>
            Cadastrar usuário
          </Button>
        </Row>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
