import styled from 'styled-components'

import { breakpoints } from '../../styles/GlobalStyle'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;

  &.is-open {
    display: block;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
    body.no-scroll {
      overflow: hidden;
    }
  }
`

export const ModalContent = styled.div`
  display: none;
  z-index: 2;

  &.is-open {
    display: flex;
  }

  &.center {
    position: fixed;
    width: 1024px;
    height: 344px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.right {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 360px;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    &.center {
      width: 80%;
      height: fit-content;
    }
  }
`
