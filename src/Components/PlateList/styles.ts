import styled from 'styled-components'
import { breakpoints, colors as c } from '../../styles/GlobalStyle'

export const ListContainer = styled.div`
  background-color: ${c.beige1};
  width: 100%;
  padding: 80px 0 120px 0;
`

export const ListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
