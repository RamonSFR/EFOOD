import styled from 'styled-components'

import { colors as c } from '../../styles/GlobalStyle'

export const HeroContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    height: 100%;
    padding: 24px 0 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Title = styled.h2`
  color: ${c.white};
  font-size: 32px;
  font-weight: 000;
`

export const Category = styled.h4`
  color: ${c.white};
  font-size: 32px;
  text-transform: lowercase;
  font-weight: 100;
`
