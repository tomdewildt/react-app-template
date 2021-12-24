import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Router from "../router/Router";
import theme, { GlobalStyle } from "../theme";

const App = () => (
    <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
