import * as S from './styles'

type Props = {
  title: string
  type: string
  image: string
}

const Hero = ({ title, type, image }: Props) => {
  return (
    <S.HeroContainer style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <S.Category>{type}</S.Category>
        <S.Title>{title}</S.Title>
      </div>
    </S.HeroContainer>
  )
}

export default Hero
