import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, Link } from 'react-router-dom'

import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/icons/logo.png'
import cartIco from '../../assets/images/icons/cartIco.svg'

import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isHomePage = location.pathname === '/'

  return (
    <S.HeaderContainer>
      <S.HeaderLogo
        className={isHomePage ? 'home' : ''}
        onClick={() => navigate('/')}
      >
        <img draggable="false" src={logo} alt="EFOOD" />
      </S.HeaderLogo>
      <div className="container">
        {isHomePage ? (
          <S.Title>
            Live gastronomical experiences <br />
            at the confort of your home
          </S.Title>
        ) : (
          <S.HeaderNav>
            <li className="desktop">
              <Link to="/">
                <p>Restaurants</p>
              </Link>
            </li>
            <li className="mobile">
              <h1 onClick={() => navigate('/')}>
                <img draggable="false" src={logo} alt="EFOOD" />
              </h1>
            </li>
            <li className="shopping-cart" onClick={() => dispatch(open())}>
              <p>
                <span className="desktop">
                  {items.length} Product(s) in cart
                </span>
                <span className="mobile">
                  <img className="cart-mobile-ico" src={cartIco} alt="Cart" />
                  {items.length}
                </span>
              </p>
            </li>
          </S.HeaderNav>
        )}
      </div>
    </S.HeaderContainer>
  )
}

export default Header
