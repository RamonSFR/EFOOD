import sushi from '../../assets/images/misc/sushi.png'
import star from '../../assets/images/icons/starIco.png'

import * as S from './styles'
import { Button } from '../Button/styles'

const Restaurant = () => (
  <S.Card>
    <img src={sushi} alt="sushi" />
    <S.Infos>
      <div>
        <S.Title>Hioki Sushi</S.Title>
        <span>
          4.9 <img src={star} alt="stars" />
        </span>
      </div>
      <S.Description>
        Order the best Japanese cuisine in the comfort of your home! Fresh
        sushi, delicious sashimi and irresistible hot dishes. Fast delivery,
        careful packaging and guaranteed quality. Experience Japan without
        leaving home with our delivery service!
      </S.Description>
      <Button type="secondary">
        <>View More</>
      </Button>
    </S.Infos>
  </S.Card>
)

export default Restaurant
