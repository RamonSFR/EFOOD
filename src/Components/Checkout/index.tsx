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
        .min(3, 'Name should have at least 3 characters')
        .required('Name is required'),
      address: Yup.string()
        .min(5, 'Address should have at least 5 characters')
        .required('Address is required'),
      city: Yup.string()
        .min(2, 'City should have at least 2 characters')
        .required('City is required'),
      zipCode: Yup.string()
        .min(9, 'ZIP code should have 9 characters')
        .max(9, 'ZIP code should have 9 characters')
        .required('ZIP code is required'),
      postalCode: Yup.string()
        .min(2, 'Number should have at least 2 characters')
        .required('Number is required'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(3, 'Name on card should have at least 3 characters')
        .required('Name on card is required'),
      cardNumber: Yup.string()
        .min(19, 'Card number should have 19 characters')
        .max(19, 'Card number should have 19 characters')
        .required('Card number is required'),
      cvv: Yup.string()
        .min(3, 'CVV should have at least 3 characters')
        .max(3, 'CVV should have 3 characters')
        .required('CVV is required'),
      expirationMonth: Yup.number()
        .typeError('Invalid month')
        .required('Month is required')
        .min(1, 'Must be between 1 and 12')
        .max(12, 'Must be between 1 and 12'),
      expirationYear: Yup.number()
        .typeError('Invalid year')
        .required('Year is required')
        .min(2025, 'Must be 2025 or later')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.price
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
                    <S.FormTitle>Delivery</S.FormTitle>
                    <div className="input-group">
                      <label htmlFor="name">Who will receive</label>
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
                      <label htmlFor="address">Address</label>
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
                      <label htmlFor="city">City</label>
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
                        <label htmlFor="zipCode">Zip Code</label>
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
                        <label htmlFor="postalCode">Number</label>
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
                      <label htmlFor="complement">Complement (optional)</label>
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
                        <>Proceed to payment</>
                      </Btn>
                      <Btn onClick={backToCart}>
                        <>Back to cart</>
                      </Btn>
                    </div>
                  </>
                ) : (
                  <>
                    <S.FormTitle>Payment - Amount to pay {total}</S.FormTitle>
                    <div className="input-group">
                      <label htmlFor="cardName">Name on card</label>
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
                        <label htmlFor="cardNumber">Card number</label>
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
                        <small className="cvv-error-msg">
                          {checkInputsHasErrors('cvv') && form.errors.cvv}
                        </small>
                      </div>
                    </div>
                    <div className="card-info-2">
                      <div className="input-group">
                        <label htmlFor="expirationMonth">
                          Expiration Month
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
                        <label htmlFor="expirationYear">Expiration Year</label>
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
                        <>Finish payment</>
                      </Btn>
                      <Btn onClick={() => setStep('delivery')}>
                        <>Back to address editing</>
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
              <h3>Order Placed - {data?.orderId}</h3>
              <p>
                We are happy to inform you that your order is already being
                prepared and will soon be delivered to the provided address.
              </p>
              <p>
                We would like to emphasize that our delivery personnel are not
                authorized to collect any additional charges.
              </p>
              <p>
                Remember the importance of sanitizing your hands after receiving
                the order, thus ensuring your safety and well-being during the
                meal.
              </p>
              <p>
                We hope you enjoy a delicious and pleasant dining experience.
                Bon appétit!
              </p>

              <Btn type="link" to="/" onClick={closeCheckout}>
                <>Finish</>
              </Btn>
            </S.OrderFinish>
          </>
        )}
        <S.Disclaimer>
          This checkout page is a simulation — no data is saved, stored, or used
          for real payments. The purchase is not completed; this is only a demo
          experience.
        </S.Disclaimer>
      </S.ModalContainer>
    </Modal>
  )
}

export default Checkout
