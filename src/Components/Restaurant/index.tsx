import { useNavigate } from 'react-router-dom'

import star from '../../assets/images/icons/starIco.png'

import * as S from './styles'
import { Button } from '../Button/styles'
import filterDescription from '../../utils/functions/filterDescription'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  image: string
}

const Restaurant = ({ description, image, title, rating, id }: Props) => {
  const navigate = useNavigate()
  const goToProduct = () => {
    navigate(`restaurant/${id}`)
  }

  return (
    <S.Card
      title={`Click here to get see more of the restaurant ${title}`}
    >
      <img src={image} alt="sushi" onClick={goToProduct} />
      <S.Infos>
        <div>
          <S.Title>{title}</S.Title>
          <span>
            {rating} <img src={star} alt="stars" />
          </span>
        </div>
        <S.Description>{filterDescription(description, 198)}</S.Description>
        <Button onClick={goToProduct} type="secondary">
          <>View More</>
        </Button>
      </S.Infos>
    </S.Card>
  )
}

export default Restaurant
