import styled from "styled-components";
import { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: ${colors.g2};
  `}
`;
