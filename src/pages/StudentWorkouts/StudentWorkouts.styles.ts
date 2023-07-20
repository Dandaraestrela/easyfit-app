import styled from "styled-components";

export const Wrapper = styled.div`
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

export const WorkoutsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
`;

export const WorkoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.g4};
  }
`;

export const WorkoutActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ActionsButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;
