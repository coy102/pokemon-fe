import { memo } from 'react'

import { Box } from '@mui/material'

const EmptyState = () => (
  <Box display="flex" justifyContent="center">
    <Box>
      <div>No data available</div>
    </Box>
  </Box>
)

export default memo(EmptyState)
