import type { JSX } from 'react'

import * as S from './styles'

export type Props = {
  children: JSX.Element
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'link'
  onClick?: () => void
  to?: string
}

const Btn = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  to = ''
}: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink to={to} onClick={onClick}>
        {children}
      </S.ButtonLink>
    )
  }
  return (
    <S.Button onClick={onClick} variant={variant} type={type}>
      {children}
    </S.Button>
  )
}

export default Btn
