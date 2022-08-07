import { memo } from 'react'

import { Box, Grid } from '@mui/material'

import CardItem from '~/components/CardItem'
import { ENV } from '~/config/constants'

import useHooks from './hooks'

const Pokemons = () => {
  const { memoPokemon } = useHooks()
  return (
    <Box display="flex" flexDirection="column">
      <Grid spacing={2} container>
        {memoPokemon?.map((pokemon) => (
          <Grid key={pokemon.id} xs={6} sm={6} item>
            <CardItem
              coverSrc={`${ENV.imageDomain}/${pokemon.id}.png`}
              title={pokemon.name}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default memo(Pokemons)
