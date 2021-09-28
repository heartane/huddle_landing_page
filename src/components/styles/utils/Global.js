import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');
  * {
    box-sizing: border-box;
  }

  body, button {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    margin: 0;
  }
  p {
    opacity: 0.8;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
  `;
