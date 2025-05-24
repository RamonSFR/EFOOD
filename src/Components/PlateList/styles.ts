import styled from 'styled-components'
import { breakpoints, colors as c } from '../../styles/GlobalStyle'
import { Button } from '../Button/styles'

export const ListContainer = styled.div`
  background-color: ${c.beige1};
  width: 100%;
  padding: 80px 0 120px 0;
`

export const ListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ModalContaier = styled.div`
  display: flex;
  padding: 32px;
  background-color: ${c.red};
  color: ${c.beige1};
  position: relative;
  width: 100%;

  & > .closeIcon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`

export const ModalInfos = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 18px;
    word-break: break-all;
    font-weight: 900;
  }

  p,
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  ${Button} {
    max-width: 218px;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`
