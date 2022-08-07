import { memo } from 'react'

import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import Image from 'next/image'

const StyledImage = styled(Image)({
  borderRadius: 10,
  objectFit: 'cover',
})

interface Props {
  coverSrc: string
  title: string
}

const CardItem = ({ coverSrc, title }: Props) => (
  <Box mb={5} display="flex" flexDirection="column">
    <StyledImage src={coverSrc} width="auto" height={200} />
    <Typography
      mt={2}
      fontSize={fontSize[12]}
      fontWeight="bold"
      className="textWrap"
    >
      {title}
    </Typography>
  </Box>
)

export default memo(CardItem)
