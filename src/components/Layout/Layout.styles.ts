import styled from 'styled-components'
import { mixins } from 'theme'

import { Header as HeaderComp } from 'components/Header/Header'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled(HeaderComp)`
`

export const Main = styled.main`
  ${mixins.defaultGrid()}
  flex: 1 0 auto;

  ${mixins.isMobile()} {
    padding: 0 15px;
  }
`
