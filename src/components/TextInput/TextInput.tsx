import { InputHTMLAttributes, forwardRef, ChangeEvent } from "react";

import * as S from "./TextInput.styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  col?: number;
  error?: string;
  isReadOnly?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      col = 16,
      error = "",
      isReadOnly,
      ...props
    },
    ref
  ) => (
    <S.Wrapper col={col}>
      {label}
      <S.Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e)}
        readOnly={isReadOnly}
        {...props}
      />
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  )
);
export default TextInput;
