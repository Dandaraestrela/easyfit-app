import styled, { css } from "styled-components";

interface RowProps {
  marginTop?: number;
  marginBottom?: number;
  gap?: number;
  turnInColumnWhen?: number;
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  gap: ${({ gap }) => gap}px;
  ${({ turnInColumnWhen }) =>
    turnInColumnWhen &&
    css`
      @media (max-width: ${turnInColumnWhen}px) {
        flex-direction: column;
      }
    `}
`;
