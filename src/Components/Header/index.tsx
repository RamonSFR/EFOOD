import { useLocation, useNavigate } from 'react-router-dom'

import logo from '../../assets/images/icons/logo.png'

import * as S from './styles'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  return (
  <S.HeaderContainer>
    <div className="container">
      <h1 onClick={() => navigate('/')}>
        <img draggable="false" src={logo} alt="EFOOD" />
      </h1>
      {isHomePage ? (
        <S.Title>
          Live gastronomic experiences <br />
          at the confort of your house
        </S.Title>
      ) : (
        ''
      )}
    </div>
  </S.HeaderContainer>
)
}

export default Header
