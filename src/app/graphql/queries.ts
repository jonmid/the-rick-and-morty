import { gql } from '@apollo/client'

export const LIST_CHARACTERS = gql`
  query findCharacterByName($nameToSearch: String!) {
    characters(filter: { name: $nameToSearch }) {
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
