import { Button, ButtonProps, styled } from '@mui/material'
import React from 'react'

interface CustomProps extends ButtonProps {
  onClick?: any
  width?: string | number
  height?: string | number
  variant: 'outlined' | 'contained'
  disabled?: boolean
  textColor?: any
  children?: React.ReactNode
  bgColor?: any
  hoverBgColor?: any
  disabledBgColor?: any
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  textTransform?: 'none'
  fontStyle?: any
  borderRadius?: any
  border?: any
  shadow?: boolean
}

const StyledButton = styled(Button)<CustomProps>(
  ({
    width,
    height,
    textColor,
    bgColor,
    hoverBgColor,
    disabledBgColor,
    textTransform,
    fontStyle,
    borderRadius,
    border,
    shadow,
  }) => ({
    width: width,
    height: height,
    backgroundColor: bgColor,
    color: textColor,
    '&:hover': {
      backgroundColor: hoverBgColor,
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: disabledBgColor,
    },
    textTransform: textTransform,
    fontStyle: fontStyle,
    borderRadius: borderRadius,
    boxShadow: shadow ? '-moz-initial' : 'none',
    border: border,
  })
)

const CustomButton = (props: CustomProps) => {
  return (
    <StyledButton shadow={props.shadow} {...props}>
      {props.children}
    </StyledButton>
  )
}

export default CustomButton
