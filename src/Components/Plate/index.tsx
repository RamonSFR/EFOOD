import filterDescription from '../../utils/functions/filterDescription'
import Button from '../Button'

import * as S from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  price: number
  serving: string
  onClick?: () => void
}

const Plate = ({ description, image, title, onClick }: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Title>{title}</S.Title>
    <S.Description>{filterDescription(description, 175)}</S.Description>
    <Button onClick={onClick}>
      <>Adicionar ao carrinho</>
    </Button>
  </S.Card>
)

export default Plate
