import { memo } from 'react'

import styled from '@emotion/styled'
import { Chip as MuiChip } from '@mui/material'
import { capitalize } from 'lodash'

import theme from '~/styles/theme'

import { COLOR_MAPPING } from './helper'

interface Props {
  typeName: string
}

const StyledChip = styled(MuiChip)<Props>(({ typeName }) => ({
  ...COLOR_MAPPING[typeName],
  marginRight: theme.spacing(2),
}))

const CustomChip = ({ typeName }: Props) => (
  <StyledChip size="small" typeName={typeName} label={capitalize(typeName)} />
)

export default memo(CustomChip)
