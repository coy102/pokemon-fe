import { gql } from '@apollo/client'

import * as Types from '../types'

export type GetAllPokemonQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>
  where?: Types.Maybe<Types.PokemonWhere>
}>

export type GetAllPokemonQuery = {
  pokemons: Array<
    Pick<Types.Pokemon, 'id' | 'name'> & {
      types: Array<{ type?: Types.Maybe<Pick<Types.PokemonWhere, 'name'>> }>
    }
  >
}

export const GetAllPokemon = gql`
  query getAllPokemon($limit: Int, $where: pokemon_v2_pokemon_bool_exp) {
    pokemons: pokemon_v2_pokemon(limit: $limit, where: $where) {
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
