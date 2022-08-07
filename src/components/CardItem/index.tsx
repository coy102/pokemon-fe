import { memo } from 'react'

import styled from '@emotion/styled'
import { Box, Card, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import Image from 'next/image'
import uniqid from 'uniqid'

import { PokemonType } from '~/gqlservices/types'

import CustomChip from '../CustomChip'

const StyledImage = styled(Image)({
  borderRadius: 10,
  objectFit: 'cover',
})

interface Props {
  coverSrc: string
  title: string
  types: Array<PokemonType>
}

const CardItem = ({ coverSrc, title, types }: Props) => (
  <Box mb={5} display="flex" flexDirection="column">
    <Card>
      <StyledImage
        loader={() => coverSrc}
        src={coverSrc}
        width="auto"
        height={200}
      />
    </Card>
    <Box mt={2}>
      {types.map((type) => (
        <CustomChip key={uniqid()} typeName={type.type.name} />
      ))}
    </Box>
    <Typography fontSize={fontSize[12]} fontWeight="bold">
      {title}
    </Typography>
  </Box>
)
export default memo(CardItem)
