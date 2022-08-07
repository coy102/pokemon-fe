import { memo } from 'react'

import { Box, CircularProgress } from '@mui/material'

const LoadingState = () => (
  <Box display="flex" justifyContent="center">
    <Box>
      <CircularProgress />
    </Box>
  </Box>
)

export default memo(LoadingState)
