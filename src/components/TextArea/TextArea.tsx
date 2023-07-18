import { TextareaHTMLAttributes, forwardRef, ChangeEvent } from "react";

import * as S from "./TextArea.styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  col?: number;
  error?: string;
  isReadOnly?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
export default TextArea;
