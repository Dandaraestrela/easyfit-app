import styled from "styled-components";
import { MainWrapper } from "../DefaultStyles/Wrappers";

export const Wrapper = styled(MainWrapper)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  padding: 0 40px 0 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 16px -6px rgba(24, 39, 75, 0.08),
    0px 6px 8px -6px rgba(24, 39, 75, 0.12);
`;

export const MenuLinksWrapper = styled.div`
  display: flex;
  gap: 24px;
  font-family: Inter;
  a {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.g2};
    svg {
      fill: ${({ theme }) => theme.colors.g2};
    }
  }
  a.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.redDark};
    svg {
      fill: ${({ theme }) => theme.colors.redDark};
    }
  }
`;
