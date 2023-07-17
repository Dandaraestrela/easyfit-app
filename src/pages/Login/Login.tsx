import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInput from "@/components/TextInput/TextInput";
import Button from "@/components/Button/Button";
import { ReactComponent as Logo } from "@/assets/Logo.svg";

import * as S from "./Login.styles";
import { useNavigate } from "react-router-dom";
import { routesURLs } from "@/routes/Router";

export const schema = Yup.object({
  user: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { user: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    // TODO: alterar de acordo com perfil que fez login
    navigate(routesURLs.myTrains);
  };

  return (
    <S.Wrapper>
      <Logo />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Usuário"
          placeholder="Digite seu usuário aqui..."
          {...register("user")}
          error={errors.user?.message}
        />
        <TextInput
          type="password"
          label="Senha"
          placeholder="Digite sua senha aqui..."
          {...register("password")}
          error={errors.password?.message}
        />
        <Button type="submit" marginTop={12}>
          Entrar
        </Button>
        <Button type="button" variant="secondary" marginTop={12}>
          Cadastro
        </Button>
      </form>
    </S.Wrapper>
  );
}
