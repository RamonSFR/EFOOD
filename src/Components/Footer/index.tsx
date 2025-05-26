import efoodLogo from '../../assets/images/icons/logo.png'
import instagramIco from '../../assets/images/icons/instagramIco.png'
import facebookIco from '../../assets/images/icons/facebookIco.png'
import twitterIco from '../../assets/images/icons/twitterIco.png'

import * as S from './styles'

const Footer = () => (
  <div className="container">
    <S.Footer>
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
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade  <br />dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.Footer>
  </div>
)

export default Footer
