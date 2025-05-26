import Modal from '../Modal'

import Button from '../Button'
import deleteIco from '../../assets/images/icons/deleteIco.png'
import { clear, close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import parseToUsd from '../../utils/functions/parseToUsd'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.price)
    }, 0)
  }

  return (
    <Modal isOpen={isOpen} onClick={() => dispatch(close())}>
      <S.ModalContainer>
        {items.length > 0 ? (
          <>
            <S.CartProducts>
              {items.map((item) => (
                <S.CartProduct key={item.id}>
                  <img
                    onClick={() => dispatch(remove(item))}
                    className="closeIco"
                    src={deleteIco}
                    alt="click to remove item from cart"
                  />
                  <S.CartProductImage src={item.foto} />
                  <S.CartProductInfo>
                    <h2>{item.nome}</h2>
                    <span>{parseToUsd(item.preco)}</span>
                  </S.CartProductInfo>
                </S.CartProduct>
              ))}
            </S.CartProducts>
            <S.CartTotal>
              Valor total  <span>{parseToUsd(getTotalPrice())}</span>
            </S.CartTotal>
            <Button onClick={() => dispatch(clear())}>
              <>Limpar carrinho</>
            </Button>
            <Button>
              <>Continuar com a entrega</>
            </Button>
          </>
        ) : (
          <>
            <>
              <h3>Seu carrinho está vazio</h3>
              <Button onClick={() => dispatch(close())}>
                <>Voltar para compras</>
              </Button>
            </>
          </>
        )}
      </S.ModalContainer>
    </Modal>
  )
}

export default Cart
