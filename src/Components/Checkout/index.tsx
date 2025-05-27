import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import * as Yup from 'yup'

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

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      postalCode: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must have at least 3 characters')
        .required('Name is required'),
      address: Yup.string()
        .min(5, 'Address must have at least 5 characters')
        .required('Address is required'),
      city: Yup.string()
        .min(2, 'City must have at least 2 characters')
        .required('City is required'),
      zipCode: Yup.string()
        .min(9, 'ZIP code must have 9 characters')
        .max(9, 'ZIP code must have 9 characters')
        .required('ZIP code is required'),
      postalCode: Yup.string()
        .min(2, 'Number must have at least 2 characters')
        .required('Number is required'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(3, 'Card name must have at least 3 characters')
        .required('Card name is required'),
      cardNumber: Yup.string()
        .min(19, 'Card number must have 19 characters')
        .max(19, 'Card number must have 19 characters')
        .required('Card number is required'),
      cvv: Yup.string()
        .min(3, 'CVV must have at least 3 characters')
        .max(3, 'CVV must have at least 3 characters')
        .required('CVV is required'),
      expirationMonth: Yup.string()
        .min(2, 'Expiration month must have 2 digits')
        .max(2, 'Expiration month must have 2 digits')
        .required('Expiration month is required'),
      expirationYear: Yup.string()
        .min(2, 'Expiration year must have 4 digits')
        .max(2, 'Expiration year must have 4 digits')
        .required('Expiration year is required')
    }),
    onSubmit: (values) => {
      console.log('Form submitted', values)
    }
  })

  const total = parseToUsd(getTotalPrice(items))

  return (
    <Modal isOpen={isOpen} onClick={() => closeCheckout()}>
      <S.ModalContainer>
        <S.Form onSubmit={form.handleSubmit}>
          {step === 'delivery' ? (
            <>
              <S.FormTitle>Entrega</S.FormTitle>
              <div className="input-group">
                <label htmlFor="name">Quem irá receber</label>
                <input
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  id="name"
                />
              </div>
              <div className="input-group">
                <label htmlFor="address">Endereço</label>
                <input
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  id="address"
                />
              </div>
              <div className="input-group">
                <label htmlFor="city">Cidade</label>
                <input
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  id="city"
                />
              </div>
              <div className="form-numbers">
                <div className="input-group">
                  <label htmlFor="zipCode">CEP</label>
                  <IMaskInput
                    mask="00000-000"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    id="zipCode"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="postalCode">Número</label>
                  <IMaskInput
                    mask="0000"
                    name="postalCode"
                    value={form.values.postalCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    id="postalCode"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  id="complement"
                />
              </div>

              <div className="form-buttons">
                <Btn onClick={() => setStep('payment')}>
                  <>Continuar com o pagamento</>
                </Btn>
                <Btn onClick={backToCart}>
                  <>Voltar para o carrinho</>
                </Btn>
              </div>
            </>
          ) : (
            <>
              <S.FormTitle> Pagamento - Valor a pagar {total}</S.FormTitle>
              <div className="input-group">
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  id="cardName"
                />
              </div>
              <div className="card-info-1">
                <div className="input-group">
                  <label htmlFor="cardNumber">Número no cartão</label>
                  <IMaskInput
                    mask="0000-0000-0000-0000"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    id="cardNumber"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="cvv">CVV</label>
                  <IMaskInput
                    mask="000"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    id="cvv"
                  />
                </div>
              </div>
              <div className="card-info-2">
                <div className="input-group">
                  <label htmlFor="expirationMonth">Mês de Vencimento</label>
                  <IMaskInput
                    mask="00"
                    name="expirationMonth"
                    value={form.values.expirationMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    id="expirationMonth"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="expirationYear">Ano de Vencimento</label>
                  <IMaskInput
                    mask="00"
                    name="expirationYear"
                    value={form.values.expirationYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    id="expirationYear"
                  />
                </div>
              </div>

              <div className="form-buttons">
                <Btn type="submit">
                  <>Finalizar pagamento</>
                </Btn>
                <Btn onClick={() => setStep('delivery')}>
                  <>Voltar para a edição de endereço</>
                </Btn>
              </div>
            </>
          )}
        </S.Form>
      </S.ModalContainer>
    </Modal>
  )
}

export default Checkout
