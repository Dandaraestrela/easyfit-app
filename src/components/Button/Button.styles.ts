import styled, { css } from "styled-components";

export type ButtonVariantTypes = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariantTypes;
  col: number;
  marginTop?: number;
}

const buttonVariants = {
  primary: css`
    background-color: ${({ theme: { colors } }) => colors.redDark};
    color: ${({ theme: { colors } }) => colors.white};
  `,
  secondary: css`
    background-color: none;
    border-color: ${({ theme: { colors } }) => colors.redDark};
    color: ${({ theme: { colors } }) => colors.redDark};
  `,
};

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ variant, col, marginTop }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${col * (100 / 16)}%;
    height: 40px;

    padding: 8px;
    gap: 8px;
    margin-top: ${marginTop}px;

    border: 1px solid transparent;
    border-radius: 4px;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    ${buttonVariants[variant]}
  `}
`;
