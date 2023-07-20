import * as Yup from "yup";

export const schema = Yup.object({
  exercises: Yup.array()
    .of(
      Yup.object({
        id: Yup.string(),
        name: Yup.string().required("Campo obrigatório!"),
        description: Yup.string().required("Campo obrigatório!"),
        repetitions: Yup.string().required("Campo obrigatório!"),
        breathing: Yup.string().required("Campo obrigatório!"),
        url: Yup.string().required("Campo obrigatório!"),
        // isYoutubeUrl: Yup.boolean(), TODO: se der tempo adicionar
      })
    )
    .min(1, "Você precisa adicionar pelo menos um exercício no treino!")
    .required(),
});
