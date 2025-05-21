import type { JSX } from 'react'

import * as S from './styles'

export type Props = {
  children: JSX.Element
  type?: 'primary' | 'secondary'
}

const Btn = ({ children, type = 'primary' }: Props) => (
  <S.Button type={type}>{children}</S.Button>
)

export default Btn
