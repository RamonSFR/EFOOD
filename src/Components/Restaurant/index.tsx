import { useNavigate } from 'react-router-dom'

import { Button } from '../Button/styles'
import star from '../../assets/images/icons/starIco.png'

import filterDescription from '../../utils/functions/filterDescription'

import * as S from './styles'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  highlighted?: boolean
  image: string
  type: string
}

const Restaurant = ({ description, image, title, rating, id, type, highlighted = false }: Props) => {
  const navigate = useNavigate()
  const goToProduct = () => {
    navigate(`restaurant/${id}`)
  }

  return (
    <S.Card title={`Click here to get see more of the restaurant ${title}`}>
      <S.TagContainer>
        {highlighted && <S.Tag>Highlight of the week</S.Tag>}
        <S.Tag>{type}</S.Tag>
      </S.TagContainer>
      <img src={image} alt="sushi" onClick={goToProduct} />
      <S.Infos>
        <div>
          <S.Title>{title}</S.Title>
          <span>
            {rating} <img src={star} alt="stars" />
          </span>
        </div>
        <S.Description>{filterDescription(description, 198)}</S.Description>
        <Button onClick={goToProduct} variant="secondary">
          <>Check it out</>
        </Button>
      </S.Infos>
    </S.Card>
  )
}

export default Restaurant
