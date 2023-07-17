import { ButtonHTMLAttributes, forwardRef } from "react";

import { ButtonVariantTypes, ButtonWrapper } from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantTypes;
  col?: number;
  marginTop?: number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", col = 16, marginTop }, ref) => (
    <ButtonWrapper ref={ref} variant={variant} col={col} marginTop={marginTop}>
      {children}
    </ButtonWrapper>
  )
);

export default Button;
