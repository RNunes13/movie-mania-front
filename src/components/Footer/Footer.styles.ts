import styled from 'styled-components'
import { mixins } from 'theme'

export const Footer = styled.footer`
  padding-top: ${({ theme }) => theme.spaces.space2};
  padding-bottom: ${({ theme }) => theme.spaces.space2};
  text-align: center;
  color: ${({ theme }) => theme.colors.base_0};
  border-top: 2px solid;
  border-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.pacificBlue},
    ${({ theme }) => theme.colors.redOrange}
  ) 1;

  ${mixins.isMobile()} {
    padding: ${({ theme }) => theme.spaces.space1};
  }
`

export const Container = styled.div`
  ${mixins.defaultGrid()}
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DevelopedBy = styled.a`
  margin-left: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pacificBlue};
`
