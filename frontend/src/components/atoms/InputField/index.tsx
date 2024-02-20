import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import Theme from '../../../theme'

interface InputFieldProps {
  variant?: 'standard' | 'filled' | 'outlined'
  label?: string
  type?: string
  placeholder?: string
  value?: string | number
  starticon?: React.ReactNode
  endicon?: React.ReactNode
  defaultValue?: string | number
  height?: string
  id?: string
  disabled?: boolean
  width?: string
  inputSize?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onClick?: () => void
  bgcolor?: any
  borderRadius?: any
  borderColor?: any
  textColor?: any
  fontStyle?: any
}

export const InputField = (props: InputFieldProps) => {
  return (
    <TextField
      onClick={props.onClick}
      onChange={props.onChange}
      InputProps={{
        style: {
          padding: '0.5vh 0.7vw 0.5vh 0.3vw',
        },
        sx: {
          fontStyle: props.fontStyle ?? Theme.typography.b3,
          color: props.textColor,
          height: props.height,
          width: props.width,
          borderRadius: props.borderRadius,
          borderColor: props.borderColor,
          paddingLeft: '1vw',
          fontSize: props.inputSize,
          '&:hover': {
            borderColor: props.borderColor,
          },
          backgroundColor: props.bgcolor,
        },
        startAdornment: (
          <InputAdornment
            sx={{ cursor: 'pointer', marginLeft: 1 }}
            position="start"
          >
            {props.starticon}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment sx={{ cursor: 'pointer' }} position="end">
            {props.endicon}
          </InputAdornment>
        ),
      }}
      autoComplete="off"
      {...props}
    />
  )
}
