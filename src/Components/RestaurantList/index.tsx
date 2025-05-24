import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import Restaurant from '../Restaurant'

import * as S from './styles'
import { colors as c } from '../../styles/GlobalStyle'

export const ApiPath = 'https://fake-api-virid.vercel.app/efood'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`${ApiPath}/restaurants`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants.length) {
    return (
      <S.ListContainer>
        <div className="container">
          <BeatLoader color={c.red}>Loading...</BeatLoader>
        </div>
      </S.ListContainer>
    )
  }

  return (
    <S.ListContainer>
      <div className="container">
        <S.ListItems>
          {restaurants.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
                type={item.type}
                title={item.title}
                image={`${ApiPath}${item.cover}`}
                rating={item.review}
                description={item.description}
              />
            </li>
          ))}
        </S.ListItems>
      </div>
    </S.ListContainer>
  )
}

export default RestaurantList
