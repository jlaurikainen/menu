import { createGlobalStyle } from "styled-components";
import { VIEWPORT_BREAKPOINT } from "./constants";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 16px;
        font-family: sans-serif;
    }

    body {
        display: grid;
        grid-template-areas: "body";
        margin: 0;
        min-height: 100vh;
        color: #333333;
    }

    #root {
        display: grid;
        grid-template-areas: "nav";
        grid-template-columns: 1fr;
        padding-left: 64px;

        @media (min-width: ${VIEWPORT_BREAKPOINT}px) {
            grid-template-areas: "nav main";
            grid-template-columns: min-content 1fr;
            padding-left: 0;
        }
    }

    main {
        padding: 16px;
    }
`;
