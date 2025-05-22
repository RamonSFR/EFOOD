import pizzaImg from '../../assets/images/misc/pizza.png'
import Plate from '../Plate'

import * as S from './styles'

const mock = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizzaImg,
    price: 20,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    image: pizzaImg,
    price: 20,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    image: pizzaImg,
    price: 20,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  }
]

const PlateList = () => (
  <S.ListContainer>
    <div className="container">
      <S.ListItems>
        {mock.map((item) => (
          <li key={item.id}>
            <Plate
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          </li>
        ))}
      </S.ListItems>
    </div>
  </S.ListContainer>
)

export default PlateList
