import { memo } from 'react'

import { Box, CircularProgress } from '@mui/material'

const LoadingState = () => (
  <Box textAlign="center">
    <CircularProgress color="primary" size={20} />
  </Box>
)

export default memo(LoadingState)
