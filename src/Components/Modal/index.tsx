import type { JSX } from 'react'

import * as S from './styles'

type Props = {
  isOpen: boolean
  onClick?: () => void
  variant?: 'center' | 'right'
  children: JSX.Element
}

const Modal = ({ isOpen, onClick, children, variant = 'right' }: Props) => {
  return (
    <>
      <S.Overlay onClick={onClick} className={isOpen ? 'is-open' : ''} />
      <S.ModalContent className={`${isOpen ? 'is-open' : ''} ${variant}`}>
        {children}
      </S.ModalContent>
    </>
  )
}

export default Modal
