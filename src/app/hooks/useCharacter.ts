import { useQuery, useLazyQuery } from '@apollo/client'

import { LIST_CHARACTERS } from '../graphql/queries'

export const useSearchCharacter = () => {
  const result = useLazyQuery(LIST_CHARACTERS)
  return result
}
