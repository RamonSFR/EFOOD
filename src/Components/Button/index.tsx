import type { JSX } from 'react'

import * as S from './styles'

export type Props = {
  children: JSX.Element
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

const Btn = ({ children, type = 'primary', onClick}: Props) => (
  <S.Button onClick={onClick} type={type}>{children}</S.Button>
)

export default Btn
