import { Container } from '../../styles/GlobalStyle'
import * as S from './styles'

import logo from '../../assets/images/icons/logo.png'

export const Header = () => (
  <S.HeaderContainer>
    <Container>
      <h1>
        <img draggable="false" src={logo} alt="EFOOD" />
      </h1>
      <S.Title>
        Live gastronomic experiences <br />
        at the confort of your house
      </S.Title>
    </Container>
  </S.HeaderContainer>
)
