import type { NextPageWithLayout } from './_app'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GET_NOW_PLAYING } from 'api/queries/movies'
import { initializeApollo } from 'apollo/client'

import * as Styled  from 'styles/Home.tyles'
import { Movies } from 'src/entities/Movie/Movie'

const client = initializeApollo()

const Home: NextPageWithLayout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { movies } = new Movies(props?.movies)

  return (
    <Styled.Container>
      {movies.map(({ id, title, overview}) =>
        <details key={id}>
          <summary>{ title }</summary>
          <p>{ overview }</p>
        </details>
      )}
    </Styled.Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let movies: any[] = []

  try {
    const { data: { nowPlaying: { results = [] } = {}} } = await client.query({
      query: GET_NOW_PLAYING,
      variables: { lng: locale }
    })

    movies = results
  }
  catch (err) { }

  return {
    props: {
      movies,
      ...await serverSideTranslations(locale as string, ['common']),
    }
  }
}

export default Home
