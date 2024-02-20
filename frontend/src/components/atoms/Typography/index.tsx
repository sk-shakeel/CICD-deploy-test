import { Typography, TypographyTypeMap } from '@mui/material'
import React from 'react'

export interface TypographyProps {
  variant: TypographyTypeMap['props']['variant']
  children: React.ReactNode
  style?: React.CSSProperties
  color: any
}

const TypographyComponent = (props: TypographyProps) => {
  const { style, variant, children, color } = props
  return (
    <Typography variant={variant} style={style} color={color}>
      {children}
    </Typography>
  )
}

export default TypographyComponent
