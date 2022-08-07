import * as Apollo from '@apollo/client'

import {
  GetAllPokemon,
  GetAllPokemonQuery,
  GetAllPokemonQueryVariables,
} from '../queries/pokemon'

// Apollo lazy query get all pokemon
export function useGetAllPokemonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPokemonQuery,
    GetAllPokemonQueryVariables
  >
) {
  const options = { ...baseOptions }
  return Apollo.useLazyQuery<GetAllPokemonQuery, GetAllPokemonQueryVariables>(
    GetAllPokemon,
    options
  )
}
