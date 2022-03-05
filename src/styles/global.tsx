import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        background:  #181818;
        font-size: 14px;
        color: #fff;
        font-family: roboto-mono;
    }
`;
