import type { NextPage } from 'next'

import Image from 'next/image'
import Page from 'layout/Page/Page'

import * as Styled  from 'styles/Home.tyles'

const Home: NextPage = () => {
  return (
    <Page>
      <Styled.Container>
        <Image src="/logo.svg" alt="Movie Mania logo" width={150} height={150} />

        <Styled.Title>
          Welcome to{' '}
          <Styled.TitleBlue>Movie</Styled.TitleBlue>{' '}
          <Styled.TitleRed>Mania</Styled.TitleRed>!
        </Styled.Title>
      </Styled.Container>
    </Page>
  )
}

export default Home
