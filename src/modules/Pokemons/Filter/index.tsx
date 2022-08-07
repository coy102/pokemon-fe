import React, { memo } from 'react'

import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Box, Fab } from '@mui/material'

import CustomDrawer from '~/components/CustomDrawer'

interface Props {
  open: boolean
  handleToggleDialog: () => void
}

const Filter = ({ open, handleToggleDialog }: Props) => (
  <Box>
    <Fab
      onClick={handleToggleDialog}
      color="primary"
      size="small"
      variant="extended"
      sx={{
        position: 'fixed',
        bottom: 10,
        py: 5,
        px: 4,
      }}
    >
      <FilterAltIcon sx={{ mr: 1 }} />
      Filter
    </Fab>
    <CustomDrawer
      open={open}
      handleToggleDialog={handleToggleDialog}
      title="Filter"
    >
      Conent
    </CustomDrawer>
  </Box>
)

export default memo(Filter)
