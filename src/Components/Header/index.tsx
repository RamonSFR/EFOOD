import { useLocation, useNavigate } from 'react-router-dom'

import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/icons/logo.png'

import * as S from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
            <li className="shopping-cart" onClick={() => dispatch(open())}>
              <p>
                <span>{items.length} Product(s) in your Shopping Cart</span>
              </p>
            </li>
          </S.HeaderNav>
        </>
      )}
    </S.HeaderContainer>
  )
}

export default Header
