import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const URL_API = 'https://rickandmortyapi.com/graphql'

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL_API,
    credentials: 'same-origin'
  })
})
