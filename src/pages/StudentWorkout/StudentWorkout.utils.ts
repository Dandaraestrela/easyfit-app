import * as Yup from "yup";

export const defaultWorkout = {
  name: "",
  exercises: [
    {
      name: "",
      description: "",
      repetitions: "",
      breathing: "",
      link: "",
    },
  ],
};

export const schema = Yup.object({
  name: Yup.string().required("Campo obrigatório!"),
  exercises: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("Campo obrigatório!"),
        description: Yup.string().required("Campo obrigatório!"),
        repetitions: Yup.string().required("Campo obrigatório!"),
        breathing: Yup.string().required("Campo obrigatório!"),
        link: Yup.string().required("Campo obrigatório!"),
        // isYoutubeUrl: Yup.boolean(), TODO: se der tempo adicionar
      })
    )
    .min(1, "Você precisa adicionar pelo menos um exercício no treino!")
    .required(),
});
