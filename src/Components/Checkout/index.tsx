import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Btn from '../Button'
import Modal from '../Modal'
import { closeCheckout as close } from '../../store/reducers/checkout'
import { open } from '../../store/reducers/cart'

import parseToUsd from '../../utils/functions/parseToUsd'
import getTotalPrice from '../../utils/functions/getTotalPrice'
import type { RootReducer } from '../../store'

import * as S from './styles'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<'delivery' | 'payment'>('delivery')

  const backToCart = () => {
    dispatch(open())
    dispatch(close())
  }

  const closeCheckout = () => {
    dispatch(close())
    setStep('delivery')
  }

  const total = parseToUsd(getTotalPrice(items))

  return (
    <Modal isOpen={isOpen} onClick={() => closeCheckout()}>
      <S.ModalContainer>
        {step === 'delivery' ? (
          <S.Form>
            <S.FormTitle>Entrega</S.FormTitle>
            <div className="input-group">
              <label htmlFor="name">Quem irá receber</label>
              <input type="text" id="name" />
            </div>
            <div className="input-group">
              <label htmlFor="address">Endereço</label>
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
              <Btn onClick={() => setStep('payment')}>
                <>Continuar com o pagamento</>
              </Btn>
              <Btn onClick={backToCart}>
                <>Voltar para o carrinho</>
              </Btn>
            </div>
          </S.Form>
        ) : (
          <S.Form>
            <S.FormTitle> Pagamento - Valor a pagar {total}</S.FormTitle>
            <div className="input-group">
              <label htmlFor="cardName">Nome no cartão</label>
              <input type="text" id="cardName" />
            </div>
            <div className="card-info-1">
              <div className="input-group">
                <label htmlFor="cardNumber">Número no cartão</label>
                <input type="text" id="cardNumber" />
              </div>
              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" />
              </div>
            </div>
            <div className="card-info-2">
              <div className="input-group">
                <label htmlFor="expirationMonth">Mês de Vencimento</label>
                <input type="text" id="expirationMonth" />
              </div>
              <div className="input-group">
                <label htmlFor="expirationYear">Ano de Vencimento</label>
                <input type="text" id="expirationYear" />
              </div>
              </div>

              <div className="form-buttons">
                <Btn type='submit'><>Finalizar pagamento</></Btn>
                <Btn onClick={() => setStep('delivery')}><>Voltar para a edição de endereço</></Btn>
              </div>
          </S.Form>
        )}
      </S.ModalContainer>
    </Modal>
  )
}

export default Checkout
