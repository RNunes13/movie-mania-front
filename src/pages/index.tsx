import { NextPage, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Image from 'next/image'
import Page from 'layout/Page/Page'

import * as Styled  from 'styles/Home.tyles'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Page>
      <Styled.Container>
        <Image src="/logo.svg" alt="Movie Mania logo" width={150} height={150} />

        <Styled.Title>
          { `${t('greeting')} ` }
          <Styled.TitleBlue>Movie</Styled.TitleBlue>{' '}
          <Styled.TitleRed>Mania</Styled.TitleRed>!
        </Styled.Title>
      </Styled.Container>
    </Page>
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
