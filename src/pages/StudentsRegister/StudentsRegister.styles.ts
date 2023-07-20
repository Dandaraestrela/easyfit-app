import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px 40px;
  gap: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;
