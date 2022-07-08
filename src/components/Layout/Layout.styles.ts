import styled from 'styled-components'
import { mixins } from 'theme'

import { Header as HeaderComp } from 'components/Header/Header'
import { Footer as FooterComp } from 'components/Footer/Footer'

import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from 'components/Header/Header.styles'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled(HeaderComp)`
`

export const Footer = styled(FooterComp)`
`

export const Main = styled.main`
  ${mixins.defaultGrid()}
  flex: 1 0 auto;
  margin-top: ${HEADER_HEIGHT_DESKTOP}px;
  margin-bottom: ${({ theme }) => theme.spaces.space3};

  ${mixins.isMobile()} {
    padding: 0 15px;
    margin-top: ${HEADER_HEIGHT_MOBILE}px;
    margin-bottom: ${({ theme }) => theme.spaces.space2};
  }
`
