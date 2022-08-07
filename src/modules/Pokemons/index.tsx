import { memo } from 'react'

import { NetworkStatus } from '@apollo/client'
import { Box, Grid } from '@mui/material'
import dynamic from 'next/dynamic'

import CardItem from '~/components/CardItem'
import LoadingState from '~/components/Message/LoadingState'
import { POKEMON_IMAGE_URL } from '~/config/constants'

import useHooks from './hooks'

const Filter = dynamic(() => import('./Filter'))

const Pokemons = () => {
  const {
    handleClickTypes,
    handleToggleDialog,
    memoPokemon,
    networkStatus,
    toggleDialog,
    types,
  } = useHooks()

  // Render loading on first load
  if (networkStatus === NetworkStatus.loading) {
    return <LoadingState />
  }

  return (
    <Box position="relative">
      <Box display="flex" flexDirection="column">
        <Grid spacing={2} container>
          {memoPokemon.map((pokemon) => (
            <Grid key={pokemon.id} xs={6} sm={6} item>
              <CardItem
                coverSrc={`${POKEMON_IMAGE_URL}${pokemon.id}.png`}
                title={pokemon.name}
                types={pokemon.types}
              />
            </Grid>
          ))}
        </Grid>
        {/* Render loading when triggering fetchMore */}
        {networkStatus === NetworkStatus.fetchMore && <LoadingState />}
      </Box>
      <Filter
        handleClickTypes={handleClickTypes}
        handleToggleDialog={handleToggleDialog}
        open={toggleDialog}
        types={types}
      />
    </Box>
  )
}

export default memo(Pokemons)
