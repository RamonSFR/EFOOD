import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'

import Hero from '../Hero'
import Plate from '../Plate'
import Modal from '../Modal'
import Button from '../Button'
import Checkout from '../Checkout'
import Cart from '../Cart'
import type { RootReducer } from '../../store'
import { close, open as openAddModal } from '../../store/reducers/modal'
import { add, open as openCartModal } from '../../store/reducers/cart'
import parseToUsd from '../../utils/functions/parseToUsd'
import { useGetRestaurantByIdQuery } from '../../services/api'
import closeIco from '../../assets/images/icons/closeIco.png'

import { colors as c } from '../../styles/GlobalStyle'
import * as S from './styles'

const PlateList = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantByIdQuery(id!)

  const { isOpen: isAddModalOpen } = useSelector(
    (state: RootReducer) => state.modal
  )
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null)

  const selectItem = (item: CardapioItem) => {
    dispatch(openAddModal())
    setSelectedItem(item)
  }

  const closeAddModal = () => {
    dispatch(close())
    setSelectedItem(null)
  }

  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(close())
    dispatch(openCartModal())
  }

  if (!restaurant) {
    return (
      <div className="container">
        <BeatLoader color={c.red}>Loading...</BeatLoader>
      </div>
    )
  }

  return (
    <>
      <Hero
        title={restaurant.titulo}
        image={restaurant.capa}
        type={restaurant.tipo}
      />
      <S.ListContainer>
        <div className="container">
          <S.ListItems>
            {restaurant.cardapio.map((item) => (
              <li key={item.id}>
                <Plate
                  description={item.descricao}
                  id={item.id}
                  image={item.foto}
                  title={item.nome}
                  price={item.preco}
                  serving={item.porcao}
                  onClick={() => selectItem(item)}
                />
              </li>
            ))}
          </S.ListItems>
        </div>
      </S.ListContainer>
      {selectedItem != null && (
        <Modal onClick={closeAddModal} isOpen={isAddModalOpen} variant="center">
          <S.ModalContaier>
            <img
              src={closeIco}
              alt="click to close"
              className="closeIcon"
              onClick={closeAddModal}
            />
            <>
              <S.ModalImage src={selectedItem.foto} />
              <S.ModalInfos>
                <h4>{selectedItem.nome}</h4>
                <p>{selectedItem.descricao}</p>
                <span>{`Servings: ${selectedItem.porcao}`}</span>
                <Button onClick={() => addToCart(selectedItem)}>
                  <>Add to Shopping Cart - {parseToUsd(selectedItem.preco)}</>
                </Button>
              </S.ModalInfos>
            </>
          </S.ModalContaier>
        </Modal>
      )}
      <Cart />
      <Checkout />
    </>
  )
}

export default PlateList
