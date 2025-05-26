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
      <S.HeaderLogo onClick={() => navigate('/')}>
        <img draggable="false" src={logo} alt="EFOOD" />
      </S.HeaderLogo>
      <div className="container">
        {isHomePage ? (
          <>
            <S.HeaderLogo>
              <img draggable="false" src={logo} alt="EFOOD" />
            </S.HeaderLogo>
            <S.Title>
              Viva experiências gastronômicas <br />
              no conforto da sua casa
            </S.Title>
          </>
        ) : (
          <S.HeaderNav>
            <li>
              <Link to="/">
                <p>Restaurantes</p>
              </Link>
            </li>
            <li className="shopping-cart" onClick={() => dispatch(open())}>
              <p>
                <span>{items.length} Produto(s) no carrinho</span>
              </p>
            </li>
          </S.HeaderNav>
        )}
      </div>
    </S.HeaderContainer>
  )
}

export default Header
