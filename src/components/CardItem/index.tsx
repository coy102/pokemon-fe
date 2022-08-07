import { memo } from 'react'

import styled from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
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
  <Card>
    <CardContent>
      <Box display="flex" flexDirection="column">
        <StyledImage
          loader={() => coverSrc}
          src={coverSrc}
          width="auto"
          height={200}
        />
        <Typography
          mt={2}
          fontSize={fontSize[12]}
          fontWeight="bold"
          className="textWrap"
        >
          {title}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)
export default memo(CardItem)
