import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    
    h1,h2,h3,h4,h5,h6,span,p,q{
        color:white;
        font-family: 'Roboto', sans-serif;
    }

    *::selection{
        background-color: #F3EFE0;
        color:black
    }

    button{
        cursor:pointer;
    }
`;

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
