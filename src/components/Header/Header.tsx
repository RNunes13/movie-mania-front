import React from 'react'

import * as Styled from './Header.styles'

export const Header = () => (
  <Styled.Header data-testid='header'>
    <Styled.Container data-testid='header-container'>
      <Styled.Logo
        width={50}
        height={50}
        src='/logo-w.svg'
        alt='Movie Mania logo'
        data-testid='header-logo'
        priority
      />
    </Styled.Container>
  </Styled.Header>
)

export default Header
