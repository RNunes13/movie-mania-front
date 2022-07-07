import type { NextPageWithLayout } from './_app'

import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Image from 'next/image'

import * as Styled  from 'styles/Home.tyles'

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation('common')

  return (
    <Styled.Container>
      <Image src="/logo.svg" alt="Movie Mania logo" width={150} height={150} />

      <Styled.Title>
        { `${t('greeting')} ` }
        <Styled.TitleBlue>Movie</Styled.TitleBlue>{' '}
        <Styled.TitleRed>Mania</Styled.TitleRed>!
      </Styled.Title>
    </Styled.Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale as string, ['common'])
    }
  }
}

export default Home
