import { memo } from 'react'

import { Container } from '@mui/material'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => <Container>{children}</Container>

export default memo(Layout)
