import { memo } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'

interface Props {
  children: React.ReactNode
  open: boolean
  handleToggleDialog: () => void
  title: string
}

const CustomDrawer = ({ children, open, handleToggleDialog, title }: Props) => (
  <Drawer
    anchor="bottom"
    open={open}
    onClose={handleToggleDialog}
    classes={{
      paper: 'drawer',
    }}
  >
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <Typography sx={{ ml: 2, flex: 1 }} component="div">
          {title}
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleToggleDialog}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Box py={10} px={3}>
      {children}
    </Box>
  </Drawer>
)

export default memo(CustomDrawer)
