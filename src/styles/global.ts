import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body,
input,
textarea,
button {
  font-weight: 400;
  font-size: 1rem;
}


button:focus, button:focus-within {
  outline-style: solid;
  outline-color: ${({ theme: { colors } }) => colors.redDark} !important;
}

input:focus, input:focus-within {
  outline-style: solid;
  outline-color: ${({ theme: { colors } }) => colors.redDark} !important;
}
`;
