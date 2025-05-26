import { styled } from 'styled-components'

import type { Props } from '.'
import { colors } from '../../styles/GlobalStyle'

export const Button = styled.button<Props>`
  width: 100%;
  height: 24px;
  color: ${(props) => (props.variant === 'primary' ? colors.red : colors.beige2)};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.beige2 : colors.red};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`
