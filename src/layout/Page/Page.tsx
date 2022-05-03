import React from 'react'
import Head from 'next/head';

import * as Styled from './Page.styles'

export interface IPage {
  pageTitle?: string;
  children: any;
}

const Page = ({
  children,
  pageTitle = 'Movies',
}: IPage) => (
  <Styled.Page data-testid='page'>
    <Head>
      <title>{ pageTitle }</title>
    </Head>
    <Styled.Main data-testid='page-main'>
      {children}
    </Styled.Main>
  </Styled.Page>
)

export default Page
