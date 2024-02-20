import { Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'
import { InputField } from '../../atoms/InputField'

interface LabelPlusInputProps {
  label: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  color: any
  endicon?: React.ReactNode
  width?: string
  starticon?: React.ReactNode
  borderradius?: any
  id?: string
}

const LabelPlusInput = (props: LabelPlusInputProps) => (
  <Stack
    direction={'column'}
    justifyContent={'flex-start'}
    alignItems={'flext-start'}
    gap={'0.5vh'}
  >
    <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
      {props.label}
    </TypographyComponent>
    <InputField
      id={props.id}
      type="text"
      height="3vh"
      width={props.width ?? '14vw'}
      bgcolor={Theme.palette.structural.white}
      value={props.value}
      onChange={props.onChange}
      textColor={props.color}
      borderRadius={props.borderradius ?? Theme.spacing(2)}
      borderColor={Theme.palette.stroke[50]}
      endicon={props.endicon}
      starticon={props.starticon}
    />
  </Stack>
)

export default LabelPlusInput
