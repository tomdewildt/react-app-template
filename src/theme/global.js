import { createGlobalStyle } from "styled-components";

import animations from "./animations";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: ${ ( { theme } ) => theme.typography.fontFamily };
        font-size: ${ ( { theme } ) => theme.typography.fontSize };
        line-height: ${ ( { theme } ) => theme.typography.lineHeight };
        letter-spacing: ${ ( { theme } ) => theme.typography.letterSpacing };
        color: ${ ( { theme } ) => theme.colors.black };
    }

    * {
        box-sizing: border-box;
    }

    ${ animations }
`;

export default GlobalStyle;
