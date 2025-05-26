import { useEffect, type JSX } from 'react'

import * as S from './styles'

type Props = {
  isOpen: boolean
  onClick?: () => void
  variant?: 'center' | 'right'
  children: JSX.Element
}

let modalCount = 0

const Modal = ({ isOpen, onClick, children, variant = 'right' }: Props) => {
  useEffect(() => {
    if (isOpen) {
      modalCount++
      document.body.style.overflow = 'hidden'
    }

    return () => {
      if (isOpen) {
        modalCount--
        if (modalCount === 0) {
          document.body.style.overflow = ''
        }
      }
    }
  }, [isOpen])

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
