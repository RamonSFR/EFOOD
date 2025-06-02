import Modal from '../Modal'

import Button from '../Button'
import deleteIco from '../../assets/images/icons/deleteIco.png'
import { clear, close, remove } from '../../store/reducers/cart'
import { openCheckout } from '../../store/reducers/checkout'

import { ApiPath } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import parseToUsd from '../../utils/functions/parseToUsd'
import getTotalPrice from '../../utils/functions/getTotalPrice'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const goToCheckout = () => {
    if (items.length) {
      dispatch(close())
      dispatch(openCheckout())
    }
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
                  <S.CartProductImage src={`${ApiPath}${item.picture}`} />
                  <S.CartProductInfo>
                    <h2>{item.name}</h2>
                    <span>{parseToUsd(item.price)}</span>
                  </S.CartProductInfo>
                </S.CartProduct>
              ))}
            </S.CartProducts>
            <S.CartTotal>
              Total value <span>{parseToUsd(getTotalPrice(items))}</span>
            </S.CartTotal>
            <Button onClick={() => dispatch(clear())}>
              <>Clear cart</>
            </Button>
            <Button onClick={goToCheckout}>
              <>Continue to delivery</>
            </Button>
          </>
        ) : (
          <>
            <>
              <h3>Your cart is empty</h3>
              <Button onClick={() => dispatch(close())}>
                <>Back to shopping</>
              </Button>
            </>
          </>
        )}
      </S.ModalContainer>
    </Modal>
  )
}

export default Cart
