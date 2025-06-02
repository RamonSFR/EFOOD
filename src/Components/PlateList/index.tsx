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
import { ApiPath, useGetRestaurantByIdQuery } from '../../services/api'
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
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const selectItem = (item: MenuItem) => {
    dispatch(openAddModal())
    setSelectedItem(item)
  }

  const closeAddModal = () => {
    dispatch(close())
    setSelectedItem(null)
  }

  const addToCart = (item: MenuItem) => {
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
        title={restaurant.title}
        image={`${ApiPath}${restaurant.cover}`}
        type={restaurant.type}
      />
      <S.ListContainer>
        <div className="container">
          <S.ListItems>
            {restaurant.menu.map((item) => (
              <li key={item.id}>
                <Plate
                  description={item.description}
                  id={item.id}
                  image={`${ApiPath}${item.picture}`}
                  title={item.name}
                  price={item.price}
                  serving={item.serving}
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
              <S.ModalImage src={`${ApiPath}${selectedItem.picture}`} />
              <S.ModalInfos>
                <h4>{selectedItem.name}</h4>
                <p>{selectedItem.description}</p>
                <span>{`Serving: ${selectedItem.serving}`}</span>
                <Button onClick={() => addToCart(selectedItem)}>
                  <>Add to cart - {parseToUsd(selectedItem.price)}</>
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
