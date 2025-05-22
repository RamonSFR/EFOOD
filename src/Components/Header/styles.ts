import styled from 'styled-components'

import bg from '../../assets/images/banners/headerBg.png'
import { colors as c } from '../../styles/GlobalStyle'

export const HeaderContainer = styled.header`
  background-image: url(${bg});
  width: 100%;
  padding: 64px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 125px;
      height: 58px;
      cursor: pointer;
    }
  }
`

export const Title = styled.h2`
  color: ${c.red};
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  text-align: center;
  margin-top: 112px;
`
