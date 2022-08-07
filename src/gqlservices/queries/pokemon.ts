import { gql } from '@apollo/client'

import * as Types from '../types'

export type GetAllPokemonQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>
  offset?: Types.Maybe<Types.Scalars['Int']>
  where?: Types.Maybe<Types.PokemonWhere>
}>

export type GetAllPokemonQuery = {
  pokemons: Array<
    Pick<Types.Pokemon, 'id' | 'name'> & {
      types: Array<Types.PokemonType>
    }
  >
}

export const GetAllPokemon = gql`
  query getAllPokemon(
    $limit: Int
    $offset: Int
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    pokemons: pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: $where
    ) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`
