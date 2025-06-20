import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  beige1: '#FFF8F2',
  beige2: '#FFEBD9',
  grey: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1064px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.beige2};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    color: ${colors.red};

    @media screen and (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export default GlobalStyle
