import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  background: ${({ theme: { colors } }) => colors.g4};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
