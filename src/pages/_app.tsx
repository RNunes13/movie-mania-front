import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'
import { ApolloProvider } from '@apollo/client'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

import { theme } from 'theme'
import { GlobalStyle } from 'theme/GlobalStyle'
import { useApollo } from 'apollo/client'

import Layout from 'src/components/Layout/Layout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const apolloClient = useApollo(pageProps)
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5.0"/>
      </Head>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          { getLayout(<Component {...pageProps} />) }
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default appWithTranslation(App)
