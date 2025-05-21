import styled from 'styled-components'
import { colors as c } from '../../styles/GlobalStyle'

export const Footer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;

  p {
    color: ${c.red};
    font-size: 12px;
    text-align: center;
    margin-top: 80px;
  }
`

export const Socials = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`

export const SocialsItem = styled.li`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
