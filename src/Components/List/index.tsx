import Restaurant from '../Restaurant'

import * as S from './styles'

const List = () => (
  <S.ListContainer>
    <div className='container'>
      <S.ListItems>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </S.ListItems>
    </div>
  </S.ListContainer>
)

export default List
