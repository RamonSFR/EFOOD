import * as S from './styles'

import logo from '../../assets/images/icons/logo.png'

const Header = () => (
  <S.HeaderContainer>
    <div className="container">
      <h1>
        <img draggable="false" src={logo} alt="EFOOD" />
      </h1>
      <S.Title>
        Live gastronomic experiences <br />
        at the confort of your house
      </S.Title>
    </div>
  </S.HeaderContainer>
)

export default Header
