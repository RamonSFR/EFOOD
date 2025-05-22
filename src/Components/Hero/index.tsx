import bg from '../../assets/images/banners/pastaBanner.png'

import * as S from './styles'

const Hero = () => (
  <S.HeroContainer style={{ backgroundImage: `url(${bg})` }}>
    <div className="container">
      <S.Category>Italian</S.Category>
      <S.Title>La Dolce Vita Trattoria</S.Title>
    </div>
  </S.HeroContainer>
)

export default Hero
