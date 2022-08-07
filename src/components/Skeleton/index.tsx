import { memo } from 'react'

import { Box, Skeleton as MuiSkeleton } from '@mui/material'

const Skeleton = () => (
  <Box mb={5} display="flex" flexDirection="column">
    <MuiSkeleton variant="rectangular" width="100%" height={200} />
    <MuiSkeleton sx={{ my: 2 }} variant="text" width={100} />
    <MuiSkeleton variant="text" width={100} />
  </Box>
)

export default memo(Skeleton)
