import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  gap: 30px;

  background-color: ${({ theme: { colors } }) => colors.g4};

  form {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
`;
