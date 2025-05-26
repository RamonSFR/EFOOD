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
      {isHomePage ? (
        <S.HeaderLogo onClick={() => navigate('/')}>
          <img draggable="false" src={logo} alt="EFOOD" />
        </S.HeaderLogo>
      ) : null}
      <div className="container">
        {isHomePage ? (
          <S.Title>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
          </S.Title>
        ) : (
          <S.HeaderNav>
            <li className="desktop">
              <Link to="/">
                <p>Restaurantes</p>
              </Link>
            </li>
            <li>
              <h1 onClick={() => navigate('/')}>
                <img draggable="false" src={logo} alt="EFOOD" />
              </h1>
            </li>
            <li className="shopping-cart" onClick={() => dispatch(open())}>
              <p>
                <span className="desktop">
                  {items.length} produto(s) no carrinho
                </span>
                <span className="mobile">
                  <img src={cartIco} alt="Cart" />
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
