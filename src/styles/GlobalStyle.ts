import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  beige1: '#FFF8F2',
  beige2: '#FFEBD9'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export default GlobalStyle
