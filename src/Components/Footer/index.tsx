import efoodLogo from '../../assets/images/icons/logo.png'
import instagramIco from '../../assets/images/icons/instagramIco.png'
import facebookIco from '../../assets/images/icons/facebookIco.png'
import twitterIco from '../../assets/images/icons/twitterIco.png'

import * as S from './styles'
import { Container } from '../../styles/GlobalStyle'

const Footer = () => (
  <S.Footer>
    <Container>
      <h4>
        <img draggable={false} src={efoodLogo} alt="efood" />
      </h4>
      <S.Socials>
        <S.SocialsItem>
          <link rel="stylesheet" href="#" />
          <img src={instagramIco} alt="click to go to our instagram page" />
        </S.SocialsItem>
        <S.SocialsItem>
          <link rel="stylesheet" href="#" />
          <img src={facebookIco} alt="click to go to our facebook page" />
        </S.SocialsItem>
        <S.SocialsItem>
          <link rel="stylesheet" href="#" />
          <img src={twitterIco} alt="click to go to our twitter page" />
        </S.SocialsItem>
      </S.Socials>
      <p>
        Efood is a platform for promoting restaurants. <br /> All responsibilities
        regarding delivery and product quality lie with the restaurant itself.
      </p>
    </Container>
  </S.Footer>
)

export default Footer
