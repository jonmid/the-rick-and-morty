import { gql } from '@apollo/client'

export const LIST_CHARACTERS = gql`
  query {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`
