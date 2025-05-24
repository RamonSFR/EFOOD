import Modal from '../Modal'

import Button from '../Button'
import deleteIco from '../../assets/images/icons/deleteIco.png'
import { clear, close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { ApiPath } from '../RestaurantList'

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
                  <S.CartProductImage src={`${ApiPath}${item.picture}`} />
                  <S.CartProductInfo>
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                  </S.CartProductInfo>
                </S.CartProduct>
              ))}
            </S.CartProducts>
            <S.CartTotal>
              Total Value <span>${getTotalPrice()}</span>
            </S.CartTotal>
            <Button onClick={() => dispatch(clear())}>
              <>Clear shopping cart</>
            </Button>
            <Button>
              <>Procceed to delivery</>
            </Button>
          </>
        ) : (
          <>
            <>
              <h3>Your shopping cart is empty</h3>
              <Button onClick={() => dispatch(close())}>
                <>Go back to shopping</>
              </Button>
            </>
          </>
        )}
      </S.ModalContainer>
    </Modal>
  )
}

export default Cart
