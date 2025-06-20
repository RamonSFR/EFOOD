import styled from 'styled-components'

import { breakpoints, colors as c } from '../../styles/GlobalStyle'
import { Button } from '../Button/styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  background-color: ${c.white};
  position: relative;

  & > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
    cursor: pointer;
  }

  ${Button} {
    max-width: 82px;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 340px;
    height: 282px;
  }
`

export const Infos = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${c.red};
  border-left: 1px solid ${c.red};
  border-right: 1px solid ${c.red};
  min-height: 181px;

  h3,
  p,
  span {
    color: ${c.red};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 21px;
      height: 21px;
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
  min-height: 88px;
  word-break: break-word;
  overflow-wrap: break-word;
`
export const TagContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding: 16px;
`

export const Tag = styled.div`
  display: inline-block;
  width: auto;
  padding: 6px 4px;
  margin-left: 8px;

  font-weight: bold;
  font-size: 12px;

  color: ${c.beige2};
  background-color: ${c.red};
`
