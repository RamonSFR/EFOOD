import { BeatLoader } from 'react-spinners'

import Restaurant from '../Restaurant'
import { ApiPath, useGetRestaurantsQuery } from '../../services/api'

import { colors as c } from '../../styles/GlobalStyle'
import * as S from './styles'

const RestaurantList = () => {
  const { data, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
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
          {data!.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
                type={item.type}
                title={item.title}
                highlighted={item.highlighted}
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
