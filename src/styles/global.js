import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        background: #f1f2f6
    }
    body{
        font: 14px "Roboto", sans-serif;
       -webkit-font-smoothing: antialiased !important;
    }


`; 