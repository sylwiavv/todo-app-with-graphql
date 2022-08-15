import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.mainFontColor};
    background-color: ${({ theme }) => theme.colors.mainBgColor};
  }
  
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  * {
      font-family: 'Montserrat', sans-serif; 
    }
  
  input {
    border: 1px solid ${({ theme }) => theme.colors.mainBorderColor};
  }
  
  input::placeholder {
    font-size: 13px;
  }
`;
