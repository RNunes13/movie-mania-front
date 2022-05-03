import React from 'react'
import Head from 'next/head';

import * as Styled from './Page.styles'

interface IPage {
  pageTitle?: string;
  children: any;
}

const Page = ({
  children,
  pageTitle = 'Movies',
}: IPage) => (
  <Styled.Page>
    <Head>
      <title>{ pageTitle }</title>
    </Head>
    <Styled.Main>
      {children}
    </Styled.Main>
  </Styled.Page>
)

export default Page
