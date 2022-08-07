import { useMemo } from 'react'

import { ApolloClient, from, InMemoryCache } from '@apollo/client'

import { ENV } from '~/config/constants'

let apolloClient

function createIsomorphLink() {
  // eslint-disable-next-line global-require
  const { HttpLink } = require('@apollo/client/link/http')
  return new HttpLink({
    uri: ENV.graphqlHost,
    credentials: 'same-origin',
  })
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([createIsomorphLink()]),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const reApolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    const existingCache = reApolloClient.extract()
    reApolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return reApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = reApolloClient

  return reApolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
