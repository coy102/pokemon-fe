import { memo } from 'react'

import { NetworkStatus } from '@apollo/client'
import { Box, Grid } from '@mui/material'

import CardItem from '~/components/CardItem'
import LoadingState from '~/components/Message/LoadingState'
import { POKEMON_IMAGE_URL } from '~/config/constants'

import useHooks from './hooks'

const Pokemons = () => {
  const { memoPokemon, networkStatus } = useHooks()

  if (networkStatus === NetworkStatus.loading) {
    return <LoadingState />
  }

  return (
    <Box display="flex" flexDirection="column">
      <Grid spacing={2} container>
        {memoPokemon?.map((pokemon) => (
          <Grid key={pokemon.id} xs={6} sm={6} item>
            <CardItem
              coverSrc={`${POKEMON_IMAGE_URL}${pokemon.id}.png`}
              title={pokemon.name}
              types={pokemon.types}
            />
          </Grid>
        ))}
      </Grid>
      {networkStatus === NetworkStatus.fetchMore && <LoadingState />}
    </Box>
  )
}

export default memo(Pokemons)
