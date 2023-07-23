import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Router } from "./routes/Router";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserContextProvider>
          <Toaster position="top-right" />
          <GlobalStyle />
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
