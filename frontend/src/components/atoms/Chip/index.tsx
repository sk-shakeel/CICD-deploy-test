import { Chip, styled } from '@mui/material'
import React from 'react'

export interface StyledChipProps {
  label?: string
  onClick?: () => void
  color?: 'default' | 'primary' | 'secondary'
  variant: 'outlined' | 'filled'
  disabled?: boolean
  bgColor?: any
  width?: string
  height?: string
  hoverBackgroundColor?: string
  deleteIcon?: any
  borderColor?: any
  textColor?: any
}

const StyledChip = styled(Chip)<StyledChipProps>(
  ({
    bgColor,
    height,
    width,
    hoverBackgroundColor,
    borderColor,
    textColor,
  }) => ({
    backgroundColor: bgColor,
    height: height,
    width: width,
    '&:hover': {
      backgroundColor: hoverBackgroundColor,
    },
    border: '1px solid',
    borderColor: borderColor,
    color: textColor,
  })
)

export const CustomChip = (props: StyledChipProps) => {
  return <StyledChip data-testid="chip" {...props} icon={props.deleteIcon} />
}

export default CustomChip
