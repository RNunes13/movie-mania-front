import styled from 'styled-components'
import { mixins } from 'src/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.base_0};
  text-align: center;
`

export const Title = styled.h1`
  ${mixins.h1()}
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  
  ${mixins.isDesktop()} {
    font-size: 4rem;
  }
`

export const TitleRed = styled.span`
  color: ${({ theme }) => theme.colors.redOrange};
`

export const TitleBlue = styled.span`
  color: ${({ theme }) => theme.colors.pacificBlue};
`
