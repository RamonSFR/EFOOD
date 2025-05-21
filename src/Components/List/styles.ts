import styled from 'styled-components'
import { breakpoints, colors as c } from '../../styles/GlobalStyle'

export const ListContainer = styled.div`
  background-color: ${c.beige1};
  width: 100%;
  padding: 80px 0 120px 0;
`

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
  column-gap: 80px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
