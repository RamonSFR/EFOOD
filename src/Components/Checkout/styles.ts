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

    label, input {
      font-size: 14px;
      font-weight: 700;
    }

    input {
      display: block;
      background-color: ${c.beige2};
      border: none;
      padding: 8px 16px;
      color: ${c.grey};

      &:focus {
        outline: 2px solid ${c.beige1};
      }
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
`
