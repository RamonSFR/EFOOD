import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'

import Hero from '../Hero'
import Plate from '../Plate'

import * as S from './styles'
import { colors as c } from '../../styles/GlobalStyle'

const PlateList = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [menu, setMenu] = useState<MenuItem[]>([])
  const ApiPath = 'https://fake-api-virid.vercel.app/efood'
  const { id } = useParams()

  useEffect(() => {
    fetch(`${ApiPath}/restaurants/${id}`)
      .then((res) => res.json())
      .then((res: Restaurant) => {
        setRestaurant(res)
        setMenu(res.menu)
      })
      .catch((err) => console.error('Failed to load restaurant', err))
  }, [id])

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
                />
              </li>
            ))}
          </S.ListItems>
        </div>
      </S.ListContainer>
    </>
  )
}

export default PlateList
