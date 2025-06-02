import { styled } from 'styled-components'

import { colors as c } from '../../styles/GlobalStyle'

export const ModalContainer = styled.div`
  background-color: ${c.red};
  color: ${c.beige2};
  width: 100%;
  padding: 32px 8px;
`

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label,
    input {
      font-size: 14px;
      font-weight: 700;
    }

    input {
      background-color: ${c.beige2};
      border: none;
      padding: 8px 16px;
      color: ${c.grey};
      width: 100%;

      &:focus {
        outline: 2px solid ${c.beige1};
      }

      &.error {
        outline: 3px solid red;
      }
    }

    .cvv-error-msg {
      max-width: 100px;
      margin-bottom: 16px;
    }
  }

  .form-numbers {
    display: flex;
    gap: 32px;

    input {
      width: 100%;
    }
  }

  .form-buttons {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-info-1,
  .card-info-2 {
    display: flex;
    gap: 32px;
  }

  .card-info-1 {
    justify-content: space-between;

    .input-group:first-child {
      flex: 1;
    }

    #cardNumber {
      width: 100%;
    }

    #cvv {
      max-width: 84px;
    }
  }

  .card-info-2 input {
    max-width: 155px;
  }
`

export const OrderFinish = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
