import { useFormContext, useFieldArray } from "react-hook-form";

import { Trash } from "@phosphor-icons/react";

import { theme } from "@/styles/theme";
import { ExerciseType } from "@/utils/types";

import { Title } from "@/components/DefaultStyles/Typography";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Row } from "@/components/DefaultStyles/Row";
import Button from "@/components/Button/Button";
import TextArea from "@/components/TextArea/TextArea";
import TextInput from "@/components/TextInput/TextInput";

import * as S from "./StudentWorkout.styles";

export function StudentWorkout() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "exercises",
  });

  const watchedExercises = watch("exercises");

  return (
    <S.ContentWrapper>
      {fields.length ? (
        fields.map((field, index) => (
          <Row $gap={8}>
            <Dropdown
              key={field.id}
              title={watchedExercises?.[index].name || ""}
              attention={
                !!errors.exercises?.[index]?.name ||
                !!errors.exercises?.[index]?.breathing ||
                !!errors.exercises?.[index]?.repetitions ||
                !!errors.exercises?.[index]?.url ||
                !!errors.exercises?.[index]?.description
              }
            >
              <>
                <Row $gap={8}>
                  <TextInput
                    label="Nome do exercício"
                    {...register(`exercises.${index}.name`)}
                    error={errors.exercises?.[index]?.name?.message}
                  />
                  <TextInput
                    label="Respiração"
                    {...register(`exercises.${index}.breathing`)}
                    error={errors.exercises?.[index]?.breathing?.message}
                  />
                  <TextInput
                    label="Repetições"
                    {...register(`exercises.${index}.repetitions`)}
                    error={errors.exercises?.[index]?.repetitions?.message}
                  />
                </Row>
                <Row $gap={8}>
                  <TextInput
                    label="Link"
                    {...register(`exercises.${index}.url`)}
                    error={errors.exercises?.[index]?.url?.message}
                  />
                </Row>
                <Row>
                  <TextArea
                    label="Descrição"
                    {...register(`exercises.${index}.description`)}
                    error={errors.exercises?.[index]?.description?.message}
                  />
                </Row>
              </>
            </Dropdown>
            <Button
              type="button"
              variant="secondary"
              col={1}
              onClick={() => remove(index)}
            >
              <Trash size={20} color={theme.colors.redDark} weight="bold" />
            </Button>
          </Row>
        ))
      ) : (
        <Title>
          {errors.exercises?.message
            ? `${errors.exercises?.message}`
            : "Adicione um novo exercício!"}
        </Title>
      )}
      <Row $justifyContent="center">
        <Button
          type="button"
          col={4}
          onClick={() =>
            append({
              id: `${fields.length + 1}`, // TODO: gerar id
              name: "Novo exercício",
              description: "",
              repetitions: "",
              breathing: "",
              url: "",
            })
          }
        >
          Adicionar exercício
        </Button>
      </Row>
    </S.ContentWrapper>
  );
}
