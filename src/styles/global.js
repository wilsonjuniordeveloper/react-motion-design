import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        background: #f1f2f6;
        touch-action: pan-x pan-y;
    }
    body{
        font: 14px "Roboto", sans-serif;
       -webkit-font-smoothing: antialiased !important;
    }


`; 