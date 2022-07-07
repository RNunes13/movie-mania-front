import styled from 'styled-components'
import { mixins } from 'theme'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Main = styled.main`
  ${mixins.defaultGrid()}
  flex: 1 0 auto;

  ${mixins.isMobile()} {
    padding: 0 15px;
  }
`
