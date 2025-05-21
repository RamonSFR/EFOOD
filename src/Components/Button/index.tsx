import type { JSX } from 'react'

import * as S from './styles'

export type Props = {
  children: JSX.Element
  style?: 'primary' | 'secondary'
}

const Btn = ({ children, style = 'primary' }: Props) => (
  <S.Button style={style}>{children}</S.Button>
)

export default Btn
