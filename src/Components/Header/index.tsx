import { useLocation, useNavigate } from 'react-router-dom'

import logo from '../../assets/images/icons/logo.png'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  return (
    <S.HeaderContainer>
        {isHomePage ? (
          <>
            <S.HeaderLogo>
              <img draggable="false" src={logo} alt="EFOOD" />
            </S.HeaderLogo>
            <S.Title>
              Live gastronomic experiences <br />
              at the confort of your house
            </S.Title>
          </>
        ) : (
          <>
            <S.HeaderLogo onClick={() => navigate('/')}>
              <img draggable="false" src={logo} alt="EFOOD" />
            </S.HeaderLogo>
            <S.HeaderNav>
              <li>
                <Link to="/">
                  <p>Restaurants</p>
                </Link>
              </li>
              <li>
                <p><span>0 Product(s) in your Shopping Cart</span></p>
              </li>
            </S.HeaderNav>
          </>
        )}
    </S.HeaderContainer>
  )
}

export default Header
