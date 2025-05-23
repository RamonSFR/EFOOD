import { useEffect, useState } from 'react'

import Restaurant from '../Restaurant'

import * as S from './styles'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const ApiPath = 'https://fake-api-xyxf.vercel.app/efood'

  useEffect(() => {
    fetch(`${ApiPath}/restaurants`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <S.ListContainer>
      <div className="container">
        <S.ListItems>
          {restaurants.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
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
