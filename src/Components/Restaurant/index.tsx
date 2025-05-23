import { useNavigate } from 'react-router-dom'

import star from '../../assets/images/icons/starIco.png'

import * as S from './styles'
import { Button } from '../Button/styles'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  image: string
}

const Restaurant = ({ description, image, title, rating }: Props) => {
  const navigate = useNavigate()
  const goToProduct = () => {
    navigate('/restaurant')
  }

  return (
    <S.Card>
      <img src={image} alt="sushi" onClick={goToProduct}/>
      <S.Infos>
        <div>
          <S.Title>{title}</S.Title>
          <span>
            {rating} <img src={star} alt="stars" />
          </span>
        </div>
        <S.Description>
          {description}
        </S.Description>
        <Button onClick={goToProduct} type="secondary">
          <>View More</>
        </Button>
      </S.Infos>
    </S.Card>
  )
}

export default Restaurant
