import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import * as Yup from 'yup'

import Btn from '../Button'
import Modal from '../Modal'
import { closeCheckout as close } from '../../store/reducers/checkout'
import { clear, open } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'
import parseToUsd from '../../utils/functions/parseToUsd'
import getTotalPrice from '../../utils/functions/getTotalPrice'
import type { RootReducer } from '../../store'

import * as S from './styles'
import { BeatLoader } from 'react-spinners'
import { colors } from '../../styles/GlobalStyle'

const Checkout = () => {
  const [purchase, { isSuccess, data, isLoading, reset }] =
    usePurchaseMutation()
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
    reset()
  }

  const checkInputsHasErrors = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    return isTouched && isInvalid
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
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .required('Nome é obrigatório'),
      address: Yup.string()
        .min(5, 'Endereço deve ter pelo menos 5 caracteres')
        .required('Endereço é obrigatório'),
      city: Yup.string()
        .min(2, 'Cidade deve ter pelo menos 2 caracteres')
        .required('Cidade é obrigatória'),
      zipCode: Yup.string()
        .min(9, 'CEP deve ter 9 caracteres')
        .max(9, 'CEP deve ter 9 caracteres')
        .required('CEP é obrigatório'),
      postalCode: Yup.string()
        .min(2, 'Número deve ter pelo menos 2 caracteres')
        .required('Número é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(3, 'Nome do cartão deve ter pelo menos 3 caracteres')
        .required('Nome do cartão é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Número do cartão deve ter 19 caracteres')
        .max(19, 'Número do cartão deve ter 19 caracteres')
        .required('Número do cartão é obrigatório'),
      cvv: Yup.string()
        .min(3, 'CVV deve ter pelo menos 3 caracteres')
        .max(3, 'CVV deve ter 3 caracteres')
        .required('CVV é obrigatório'),
      expirationMonth: Yup.number()
        .typeError('Mês inválido')
        .required('Mês obrigatório')
        .min(1, 'Deve ser entre 1 e 12')
        .max(12, 'Deve ser entre 1 e 12'),
      expirationYear: Yup.number()
        .typeError('Ano inválido')
        .required('Ano obrigatório')
        .min(2025, 'Deve ser 2025 ou posterior')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.postalCode),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        }
      })

      dispatch(clear())
    }
  })

  const validateDeliveryStep = async () => {
    const errors = await form.validateForm()

    const deliveryFields: (keyof typeof form.values)[] = [
      'name',
      'address',
      'city',
      'zipCode',
      'postalCode'
    ]

    const hasErrors = deliveryFields.some((field) => errors[field])

    if (!hasErrors) {
      setStep('payment')
    } else {
      form.setTouched(
        deliveryFields.reduce(
          (acc, field) => {
            acc[field] = true
            return acc
          },
          {} as Record<string, boolean>
        )
      )
    }
  }

  const total = parseToUsd(getTotalPrice(items))

  return (
    <Modal isOpen={isOpen} onClick={() => closeCheckout()}>
      <S.ModalContainer>
        {!isSuccess ? (
          <>
            {isLoading ? (
              <BeatLoader color={colors.beige2} />
            ) : (
              <S.Form onSubmit={form.handleSubmit}>
                {step === 'delivery' ? (
                  <>
                    <S.FormTitle>Entrega</S.FormTitle>
                    <div className="input-group">
                      <label htmlFor="name">Quem irá receber</label>
                      <input
                        className={checkInputsHasErrors('name') ? 'error' : ''}
                        name="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        id="name"
                      />
                      <small>
                        {checkInputsHasErrors('name') && form.errors.name}
                      </small>
                    </div>
                    <div className="input-group">
                      <label htmlFor="address">Endereço</label>
                      <input
                        className={
                          checkInputsHasErrors('address') ? 'error' : ''
                        }
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        id="address"
                      />
                      <small>
                        {checkInputsHasErrors('address') && form.errors.address}
                      </small>
                    </div>
                    <div className="input-group">
                      <label htmlFor="city">Cidade</label>
                      <input
                        className={checkInputsHasErrors('city') ? 'error' : ''}
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        id="city"
                      />
                      <small>
                        {checkInputsHasErrors('city') && form.errors.city}
                      </small>
                    </div>
                    <div className="form-numbers">
                      <div className="input-group">
                        <label htmlFor="zipCode">CEP</label>
                        <IMaskInput
                          className={
                            checkInputsHasErrors('zipCode') ? 'error' : ''
                          }
                          mask="00000-000"
                          name="zipCode"
                          value={form.values.zipCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                          id="zipCode"
                        />
                        <small>
                          {checkInputsHasErrors('zipCode') &&
                            form.errors.zipCode}
                        </small>
                      </div>
                      <div className="input-group">
                        <label htmlFor="postalCode">Número</label>
                        <IMaskInput
                          className={
                            checkInputsHasErrors('postalCode') ? 'error' : ''
                          }
                          mask="0000"
                          name="postalCode"
                          value={form.values.postalCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                          id="postalCode"
                        />
                        <small>
                          {checkInputsHasErrors('postalCode') &&
                            form.errors.postalCode}
                        </small>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        className={
                          checkInputsHasErrors('complement') ? 'error' : ''
                        }
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        id="complement"
                      />
                      <small>
                        {checkInputsHasErrors('complement') &&
                          form.errors.complement}
                      </small>
                    </div>

                    <div className="form-buttons">
                      <Btn onClick={() => validateDeliveryStep()}>
                        <>Continuar com o pagamento</>
                      </Btn>
                      <Btn onClick={backToCart}>
                        <>Voltar para o carrinho</>
                      </Btn>
                    </div>
                  </>
                ) : (
                  <>
                    <S.FormTitle>
                      {' '}
                      Pagamento - Valor a pagar {total}
                    </S.FormTitle>
                    <div className="input-group">
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        className={
                          checkInputsHasErrors('cardName') ? 'error' : ''
                        }
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        id="cardName"
                      />
                      <small>
                        {checkInputsHasErrors('cardName') &&
                          form.errors.cardName}
                      </small>
                    </div>
                    <div className="card-info-1">
                      <div className="input-group">
                        <label htmlFor="cardNumber">Número no cartão</label>
                        <IMaskInput
                          className={
                            checkInputsHasErrors('cardNumber') ? 'error' : ''
                          }
                          mask="0000-0000-0000-0000"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                          id="cardNumber"
                        />
                        <small>
                          {checkInputsHasErrors('cardNumber') &&
                            form.errors.cardNumber}
                        </small>
                      </div>
                      <div className="input-group">
                        <label htmlFor="cvv">CVV</label>
                        <IMaskInput
                          className={checkInputsHasErrors('cvv') ? 'error' : ''}
                          mask="000"
                          name="cvv"
                          value={form.values.cvv}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                          id="cvv"
                        />
                        <small>
                          {checkInputsHasErrors('cvv') && form.errors.cvv}
                        </small>
                      </div>
                    </div>
                    <div className="card-info-2">
                      <div className="input-group">
                        <label htmlFor="expirationMonth">
                          Mês de Vencimento
                        </label>
                        <IMaskInput
                          className={
                            checkInputsHasErrors('expirationMonth')
                              ? 'error'
                              : ''
                          }
                          mask="00"
                          name="expirationMonth"
                          value={form.values.expirationMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                          id="expirationMonth"
                        />
                        <small>
                          {checkInputsHasErrors('expirationMonth') &&
                            form.errors.expirationMonth}
                        </small>
                      </div>
                      <div className="input-group">
                        <label htmlFor="expirationYear">
                          Ano de Vencimento
                        </label>
                        <IMaskInput
                          className={
                            checkInputsHasErrors('expirationYear')
                              ? 'error'
                              : ''
                          }
                          mask="0000"
                          name="expirationYear"
                          value={form.values.expirationYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                          id="expirationYear"
                        />
                        <small>
                          {checkInputsHasErrors('expirationYear') &&
                            form.errors.expirationYear}
                        </small>
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
            )}
          </>
        ) : (
          <>
            <S.OrderFinish title="Thank You!">
              <h3>Pedido Realizado - {data?.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>

              <Btn type="link" to="/" onClick={closeCheckout}>
                <>Concluir</>
              </Btn>
            </S.OrderFinish>
          </>
        )}
      </S.ModalContainer>
    </Modal>
  )
}

export default Checkout
