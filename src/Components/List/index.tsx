import Restaurant from '../Restaurant'

import sushiImg from '../../assets/images/misc/sushi.png'
import pastaImg from '../../assets/images/misc/pasta.png'

import * as S from './styles'

const mock = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: sushiImg,
    rating: 4.5,
    description:
      'Order the best Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi and hot, irresistible dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery service!'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: pastaImg,
    rating: 5.0,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavors. Order now!'
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    image: sushiImg,
    rating: 4.9,
    description:
      'Order the best Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi and hot, irresistible dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery service!'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: pastaImg,
    rating: 4.3,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavors. Order now!'
  }
]

const List = () => (
  <S.ListContainer>
    <div className="container">
      <S.ListItems>
        {mock.map((item) => (
          <li>
            <Restaurant
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              description={item.description}
            />
          </li>
        ))}
      </S.ListItems>
    </div>
  </S.ListContainer>
)

export default List
