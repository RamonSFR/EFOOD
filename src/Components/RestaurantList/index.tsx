import { BeatLoader } from 'react-spinners'

import Restaurant from '../Restaurant'

import * as S from './styles'
import { colors as c } from '../../styles/GlobalStyle'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const {data, isLoading} = useGetRestaurantsQuery()

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
                type={item.tipo}
                title={item.titulo}
                highlighted={item.destacado}
                image={`${item.capa}`}
                rating={item.avaliacao}
                description={item.descricao}
              />
            </li>
          ))}
        </S.ListItems>
      </div>
    </S.ListContainer>
  )
}

export default RestaurantList
