import { memo } from 'react'

import styled from '@emotion/styled'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'

const StyledAppbar = styled(AppBar)({
  maxWidth: 500,
  margin: '0px auto',
  right: 'unset',
})

const Navbar = () => (
  <Box width="100%" display="flex" justifyContent="center">
    <StyledAppbar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Pokemon
        </Typography>
        <Box>
          <Image alt="logo" src="/pokemon_logo.png" width={30} height={30} />
        </Box>
      </Toolbar>
    </StyledAppbar>
  </Box>
)

export default memo(Navbar)
