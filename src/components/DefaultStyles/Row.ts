import styled, { css } from "styled-components";

interface RowProps {
  $alignItems?: string;
  $justifyContent?: string;
  $marginTop?: number;
  $marginBottom?: number;
  $gap?: number;
  $turnInColumnWhen?: number;
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  gap: ${({ $gap }) => $gap}px;
  ${({ $turnInColumnWhen }) =>
    $turnInColumnWhen &&
    css`
      @media (max-width: ${$turnInColumnWhen}px) {
        flex-direction: column;
      }
    `}
`;
