import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import type { Props } from '.'
import { colors as c } from '../../styles/GlobalStyle'

export const Button = styled.button<Props>`
  width: 100%;
  height: 24px;
  color: ${(props) => (props.variant === 'primary' ? c.red : c.beige2)};
  background-color: ${(props) =>
    props.variant === 'primary' ? c.beige2 : c.red};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24px;
  color: ${c.red};
  background-color: ${c.beige2};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`
