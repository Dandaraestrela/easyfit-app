import styled, { css } from "styled-components";

interface WrapperProps {
  col: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ col }) => col * (100 / 16)}%;
  gap: 4px;
  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled.textarea`
  ${({ theme: { colors } }) => css`
    height: 100px;
    padding: 12px;
    background-color: ${colors.g3};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${colors.black};
    font-size: 14px;
    resize: none;
    ::placeholder {
      color: ${colors.g2};
    }
  `}
`;

export const Error = styled.p`
  height: 12px;
  font-size: 12px;
  color: ${({ theme: { colors } }) => colors.redMedium};
  text-align: right;
`;
