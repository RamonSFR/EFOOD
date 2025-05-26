import type { JSX } from 'react'

import * as S from './styles'

export type Props = {
  children: JSX.Element
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Btn = ({ children, variant = 'primary', onClick, type = 'button' }: Props) => (
  <S.Button onClick={onClick} variant={variant} type={type}>
    {children}
  </S.Button>
)

export default Btn
