import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  beige1: '#FFF8F2',
  beige2: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export default GlobalStyle
