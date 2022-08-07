import { useEffect, useMemo } from 'react'

import { DEFAULT_LIST_PARAMETER } from '~/config/constants'
import { useGetAllPokemonLazyQuery } from '~/gqlservices/hooks/pokemon'

const useHooks = () => {
  const [getAllPokemonLazy, pokemonData] = useGetAllPokemonLazyQuery()

  useEffect(() => {
    getAllPokemonLazy({
      variables: {
        ...DEFAULT_LIST_PARAMETER,
      },
    })
  }, [])

  const memoPokemon = useMemo(() => pokemonData?.data?.pokemons, [pokemonData])

  return {
    memoPokemon,
  }
}

export default useHooks
