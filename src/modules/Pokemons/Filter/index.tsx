import React, { memo } from 'react'

import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Box, Fab } from '@mui/material'

import CustomChip from '~/components/CustomChip'
import CustomDrawer from '~/components/CustomDrawer'

import useHooks from './hooks'

interface Props {
  open: boolean
  handleClickTypes: (type) => () => void
  handleToggleDialog: () => void
  types: number[]
}

const Filter = ({
  open,
  handleClickTypes,
  handleToggleDialog,
  types,
}: Props) => {
  const { memoTypes } = useHooks({ open })

  return (
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
        <Box mb={4}>By pokemon type</Box>
        <Box>
          {memoTypes.map((type) => (
            <CustomChip
              key={type.id}
              onClick={handleClickTypes(type.id)}
              typeName={type.name}
              selected={types.includes(type.id)}
            />
          ))}
        </Box>
      </CustomDrawer>
    </Box>
  )
}
export default memo(Filter)
