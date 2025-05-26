import styled from 'styled-components'

import bg from '../../assets/images/banners/headerBg.png'
import { breakpoints, colors as c } from '../../styles/GlobalStyle'

export const HeaderContainer = styled.header`
  background-image: url(${bg});
  width: 100%;
  padding: 64px 0;

  .container {
    display: flex;
    justify-content: center;
    position: relative;
  }
`

export const Title = styled.h2`
  color: ${c.red};
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  text-align: center;
  margin-top: 216px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    text-align: left;
    padding: 0 20px;
    margin-top: 128px;
  }
`

export const HeaderLogo = styled.h1`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  img {
    width: 125px;
    height: 58px;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .shopping-cart {
    cursor: pointer;
  }

  p {
    color: ${c.red};
    font-size: 18px;
    font-weight: 900;
  }
`
