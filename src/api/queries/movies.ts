
import { gql } from '@apollo/client'

export const GET_NOW_PLAYING = gql`
  query getNowPlaying($lng: String!) {
    nowPlaying(lng: $lng) @rest(
      type: "Movies",
      path: "/movies/popular?language={args.lng}",
    ) {
      page
      results @type(name: "Movies") {
        id
        title
        overview
      }
      pages
      total
    }
  }
`
