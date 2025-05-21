import styled from 'styled-components'

import bg from '../../assets/images/banners/headerBg.png'
import { colors as c, Container } from '../../styles/GlobalStyle'

export const HeaderContainer = styled.header`
  background-image: url(${bg});
  width: 100vw;
  height: 100%;
  padding: 64px 0 40px 0;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 125px;
      height: 58px;
      margin-bottom: 136px;
    }
  }
`

export const Title = styled.h2`
  color: ${c.red};
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  text-align: center;
`
