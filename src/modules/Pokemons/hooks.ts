import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { debounce } from 'lodash'

import { DEFAULT_LIST_PARAMETER } from '~/config/constants'
import { useGetAllPokemonLazyQuery } from '~/gqlservices/hooks/pokemon'
import { GetAllPokemonQuery } from '~/gqlservices/queries/pokemon'

const useHooks = () => {
  const offsetRef = useRef(null)

  const [toggleDialog, setToggleDialog] = useState(false)
  const [types, setTypes] = useState([])

  // Initiate pokemon lazy query
  const [
    getAllPokemonLazy,
    { data: pokemonData, fetchMore, networkStatus, loading },
  ] = useGetAllPokemonLazyQuery({
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  })

  // Memoized result query
  const memoPokemon = useMemo(() => pokemonData?.pokemons || [], [pokemonData])

  // Handle load more pokemon list
  const handleLoadMore = useCallback(() => {
    // Only execute when fetchMore is defined
    if (fetchMore) {
      // increment offset ref, we can't use state inside updatedQuery
      // for alternative we are using ref
      offsetRef.current += 10

      fetchMore({
        variables: {
          ...DEFAULT_LIST_PARAMETER,
          offset: offsetRef.current,
        },
        updateQuery(previousQueryResult, { fetchMoreResult }) {
          // when new result is undefined, return previous result
          if (!fetchMoreResult) return previousQueryResult

          // Merge previos result with new result
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
    // Triggering fetch more when user is scrolling the screen
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      handleLoadMore()
    }
  }, 300)

  const handleToggleDialog = useCallback(() => {
    setToggleDialog((prev) => !prev)
  }, [])

  // handle click types multiple value
  const handleClickTypes = useCallback(
    (value) => () => {
      const currentIndex = types.findIndex((t) => t === value)

      if (currentIndex >= 0) {
        // when user is selected same type, it will remove current type
        const newTypes = [...types]

        newTypes.splice(currentIndex, 1)

        setTypes(newTypes)

        return
      }

      // set new type
      setTypes((prev) => [...prev, value])
    },
    [types]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    let whereParam = {}

    if (types.length > 0) {
      // On send where param when state types is not empty
      whereParam = {
        _and: [
          {
            pokemon_v2_pokemontypes: {
              pokemon_v2_type: {
                id: {
                  _in: types, // _in: its means include
                },
              },
            },
          },
        ],
      }
    }

    // Initial load pokemon list
    getAllPokemonLazy({
      variables: {
        ...DEFAULT_LIST_PARAMETER,
        where: whereParam,
      },
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [types])

  return {
    handleClickTypes,
    handleToggleDialog,
    loading,
    memoPokemon,
    networkStatus,
    toggleDialog,
    types,
  }
}

export default useHooks
