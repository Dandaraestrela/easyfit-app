import styled, { css } from "styled-components";

type DropdownProps = {
  $isOpen?: boolean;
};

export const Wrapper = styled.div<DropdownProps>`
  ${({ theme: { colors }, $isOpen }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.white};
    border: 2px solid ${colors.g3};
    border-radius: 4px;
    ${$isOpen &&
    css`
      border: 2px solid ${colors.g3};
    `};
  `}
`;

export const DropdownHeaderButton = styled.button<DropdownProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 36px;

  padding: 0 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ theme: { colors }, $isOpen }) => css`
    font-weight: ${$isOpen ? "bold" : "400"};
    color: ${$isOpen ? colors.redDark : colors.g2};
    border-bottom: ${$isOpen ? `1px solid ${colors.g3} ` : "none"};

    ${!$isOpen &&
    css`
      &:hover {
        border-radius: 4px;
        background-color: ${colors.g4};
      }
    `}
  `}

  &:focus,
  &:focus-within {
    outline: none;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ContentWrapper = styled.div<DropdownProps>`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px 8px;
    background-color: ${colors.white};
  `}
`;
