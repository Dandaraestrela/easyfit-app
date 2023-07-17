import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Router } from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
