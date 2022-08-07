import { useCallback, useEffect, useMemo, useRef } from 'react'

import { debounce } from 'lodash'

import { DEFAULT_LIST_PARAMETER } from '~/config/constants'
import { useGetAllPokemonLazyQuery } from '~/gqlservices/hooks/pokemon'
import { GetAllPokemonQuery } from '~/gqlservices/queries/pokemon'

const useHooks = () => {
  const offsetRef = useRef(null)

  const [
    getAllPokemonLazy,
    { data: pokemonData, fetchMore },
  ] = useGetAllPokemonLazyQuery({
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  })

  const memoPokemon = useMemo(() => pokemonData?.pokemons || [], [pokemonData])

  const handleLoadMore = useCallback(() => {
    if (fetchMore) {
      offsetRef.current += 10
      fetchMore({
        variables: {
          ...DEFAULT_LIST_PARAMETER,
          offset: offsetRef.current,
        },
        updateQuery(previousQueryResult, { fetchMoreResult }) {
          if (!fetchMoreResult) return previousQueryResult

          const result: GetAllPokemonQuery = {
            pokemons: [
              ...previousQueryResult.pokemons,
              ...fetchMoreResult.pokemons,
            ],
          }

          return result
        },
      })
    }
  }, [fetchMore])

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      handleLoadMore()
    }
  }, 300)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    getAllPokemonLazy({
      variables: {
        ...DEFAULT_LIST_PARAMETER,
      },
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    memoPokemon,
  }
}

export default useHooks
