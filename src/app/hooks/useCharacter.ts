import { useQuery } from '@apollo/client'

import { LIST_CHARACTERS } from '../graphql/queries'

export const useCharacter = () => {
  const result = useQuery(LIST_CHARACTERS)
  return result
}
