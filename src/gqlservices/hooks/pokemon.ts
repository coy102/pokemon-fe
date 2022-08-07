import * as Apollo from '@apollo/client'

import {
  GetAllPokemon,
  GetAllPokemonQuery,
  GetAllPokemonQueryVariables,
  GetAllTypes,
  GetAllTypesQuery,
  GetAllTypesQueryVariables,
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

// Apollo lazy query get all types
export function useGetAllTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTypesQuery,
    GetAllTypesQueryVariables
  >
) {
  const options = { ...baseOptions }
  return Apollo.useLazyQuery<GetAllTypesQuery, GetAllTypesQueryVariables>(
    GetAllTypes,
    options
  )
}
