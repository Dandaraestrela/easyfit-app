import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Row } from "@/components/DefaultStyles/Row";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";

import * as S from "./StudentsRegister.styles";

export const schema = Yup.object({
  user: Yup.string().required("Campo obrigatório"),
  userName: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export function StudentsRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { user: "", username: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      Cadastrar novo aluno
      <S.ContentWrapper>
        <Row $gap={8}>
          <TextInput label="Nome" />
          <TextInput label="Username" />
          <TextInput label="Senha" />
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
