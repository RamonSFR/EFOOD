import { useDispatch, useSelector } from 'react-redux'

import Btn from '../Button'
import Modal from '../Modal'
import { closeCheckout } from '../../store/reducers/checkout'
import { open } from '../../store/reducers/cart'

import * as S from './styles'
import type { RootReducer } from '../../store'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const backToCart = () => {
    dispatch(open())
    dispatch(closeCheckout())
  }

  return (
    <Modal isOpen={isOpen} onClick={() => dispatch(closeCheckout())}>
      <S.ModalContainer>
        <S.FormTitle>Entrega</S.FormTitle>
        <S.Form>
          <div className="input-group">
            <label htmlFor="name">Quem irá receber</label>
            <input type="text" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Endereçoa</label>
            <input type="text" id="address" />
          </div>
          <div className="input-group">
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
          </div>
          <div className="form-numbers">
            <div className="input-group">
              <label htmlFor="zipcode">CEP</label>
              <input type="text" id="zipcode" />
            </div>
            <div className="input-group">
              <label htmlFor="number">Número</label>
              <input type="text" id="number" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" />
          </div>

          <div className="form-buttons">
            <Btn type="submit">
              <>Continuar com o pagamento</>
            </Btn>
            <Btn onClick={backToCart}>
              <>Voltar para o carrinho</>
            </Btn>
          </div>
        </S.Form>
      </S.ModalContainer>
    </Modal>
  )
}

export default Checkout
