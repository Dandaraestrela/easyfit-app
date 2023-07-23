import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

import TextInput from "@/components/TextInput/TextInput";
import Button from "@/components/Button/Button";
import { ReactComponent as Logo } from "@/assets/Logo.svg";

import * as S from "./Login.styles";
import { useNavigate } from "react-router-dom";
import { routesURLs } from "@/routes/Router";
import { Row } from "@/components/DefaultStyles/Row";
import api from "@/services/api";

import { useUserContext } from "@/contexts/UserContext";

export const schema = Yup.object({
  user: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
  type: Yup.string().required("Campo obrigatório"),
});

export function Login() {
  const navigate = useNavigate();
  const { loginUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { user: "", password: "", type: "student" },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    if (values.type === "student") {
      const toastId = toast.loading("Carregando...");

      try {
        const response = await api.post("login/clients", {
          username: values.user,
          password: values.password,
        });
        loginUser({
          id: response.data.user.id,
          name: response.data.user.name,
          username: response.data.user.username,
          type: "client",
        });
        toast.dismiss(toastId);
        navigate(routesURLs.myWorkouts);
      } catch (err: any) {
        if (err.response.status === 404) {
          toast.dismiss(toastId);
          toast.error("Usuário não encontrado");
        }
      }
    }
    if (values.type === "professor") {
      try {
        const response = await api.post("login/personals", {
          username: values.user,
          password: values.password,
        });
        loginUser({
          id: response.data.user.id,
          name: response.data.user.name,
          username: response.data.user.username,
          type: "personal",
        });
        navigate(routesURLs.studentsList);
      } catch (err: any) {
        if (err.response.status === 404) toast.error("Usuário não encontrado");
      }
    }
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
        <Row $gap={12}>
          <input
            type="radio"
            id="student"
            value="student"
            {...register("type")}
          />
          <label htmlFor="student">Aluno</label>
          <input
            type="radio"
            id="professor"
            value="professor"
            {...register("type")}
          />
          <label htmlFor="professor">Professor</label>
        </Row>

        <Button type="submit" marginTop={12}>
          Entrar
        </Button>
      </form>
    </S.Wrapper>
  );
}
