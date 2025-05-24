import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'

import Hero from '../Hero'
import Plate from '../Plate'
import Modal from '../Modal'
import Button from '../Button'
import type { RootReducer } from '../../store'
import {close, open} from '../../store/reducers/modal'
import closeIco from '../../assets/images/icons/closeIco.png'

import { colors as c } from '../../styles/GlobalStyle'
import * as S from './styles'

const PlateList = () => {
  const { id } = useParams()
  const { isOpen } = useSelector((state: RootReducer) => state.modal)
  const dispatch = useDispatch()

  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const ApiPath = 'https://fake-api-virid.vercel.app/efood'

  useEffect(() => {
    fetch(`${ApiPath}/restaurants/${id}`)
      .then((res) => res.json())
      .then((res: Restaurant) => {
        setRestaurant(res)
        setMenu(res.menu)
      })
      .catch((err) => console.error('Failed to load restaurant', err))
  }, [id])

  const selectItem = (item: MenuItem) => {
    dispatch(open())
    setSelectedItem(item)
  }

  const closeModal = () => {
    dispatch(close())
    setSelectedItem(null)
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
            {menu.map((item) => (
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
        <Modal onClick={closeModal} isOpen={isOpen} variant="center">
          <S.ModalContaier>
            <img
              src={closeIco}
              alt="click to close"
              className="closeIcon"
              onClick={closeModal}
            />
            <>
              <S.ModalImage src={`${ApiPath}${selectedItem.picture}`} />
              <S.ModalInfos>
                <h4>{selectedItem.name}</h4>
                <p>{selectedItem.description}</p>
                <span>{`Servings: ${selectedItem.serving}`}</span>
                <Button>
                  <>Add to Shopping Cart - ${selectedItem.price}</>
                </Button>
              </S.ModalInfos>
            </>
          </S.ModalContaier>
        </Modal>
      )}
    </>
  )
}

export default PlateList
