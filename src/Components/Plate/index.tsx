import Button from '../Button'

import * as S from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  price: number
}

const Plate = ({ description, image, title }: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Button>
      <>Add to Cart</>
    </Button>
  </S.Card>
)

export default Plate
