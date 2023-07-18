import styled, { css } from "styled-components";

interface DropdownProps {
  isOpen?: boolean;
}

export const Wrapper = styled.div<DropdownProps>`
  ${({ theme: { colors }, isOpen }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 8px;
    background-color: ${colors.white};
    border: 2px solid transparent;
    border-radius: 4px;
    ${isOpen &&
    css`
      border: 2px solid ${colors.redDark};
    `};
  `}
`;

export const DropdownHeaderButton = styled.button<DropdownProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ theme: { colors }, isOpen }) => css`
    font-weight: ${isOpen ? "bold" : "400"};
    color: ${isOpen ? colors.redDark : colors.g2};
    border-bottom: ${isOpen ? `1px solid ${colors.g3} ` : "none"};
  `}

  &:focus,
  &:focus-within {
    outline: none;
  }
`;
