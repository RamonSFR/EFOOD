import styled from 'styled-components'
import { colors as c } from '../../styles/GlobalStyle'

export const Card = styled.div`
  width: 320px;
  max-height: 338px;
  height: 100%;
  padding: 8px;
  background-color: ${c.red};
  color: ${c.beige2};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 8px;

  img {
    display: block;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`
