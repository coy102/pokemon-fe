import { memo } from 'react'

import styled from '@emotion/styled'
import { Box } from '@mui/material'

import Navbar from '../Navbar'

const MobileContainer = styled.div({
  maxWidth: 500,
  margin: '0px auto',
  padding: '0px 15px 5px 15px',
})

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    <MobileContainer>
      <Box mt={12}>{children}</Box>
    </MobileContainer>
  </>
)

export default memo(Layout)
