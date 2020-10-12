import React from "react";
import { ThemeProvider } from "styled-components";

import Router from "../router/Router";
import theme, { GlobalStyle } from "../theme";

const App = () => (
    <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Router />
    </ThemeProvider>
);

export default App;
