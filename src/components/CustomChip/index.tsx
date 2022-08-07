import { memo } from 'react'

import styled from '@emotion/styled'
import { Chip as MuiChip } from '@mui/material'
import { capitalize } from 'lodash'

import theme from '~/styles/theme'

import { COLOR_MAPPING } from './helper'

interface Props {
  onClick?: () => void
  selected?: boolean
  typeName: string
}

const StyledChip = styled(MuiChip)<Props>(({ selected, typeName }) => ({
  ...COLOR_MAPPING[typeName],
  marginRight: theme.spacing(3),
  marginBottom: theme.spacing(3),
  border: selected ? '3px solid #fff' : 'unset',
}))

const CustomChip = ({ onClick, typeName, selected = false }: Props) => (
  <StyledChip
    onClick={onClick}
    size="small"
    typeName={typeName}
    label={capitalize(typeName)}
    selected={selected}
  />
)

export default memo(CustomChip)
