import styled from 'styled-components'

import { colors as c } from '../../styles/GlobalStyle'
import { Button } from '../Button/styles'

export const ModalContainer = styled.aside`
  background-color: ${c.red};
  color: ${c.beige2};
  width: 100%;
  padding: 32px 8px;

  ${Button} {
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 16px;
  }
`

export const CartProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartProduct = styled.li`
  background-color: ${c.beige2};
  color: ${c.red};
  position: relative;
  display: flex;
  padding: 8px;

  & > .closeIco {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const CartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 8px;

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const CartProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  font-size: 14px;
  font-weight: 700;
`
