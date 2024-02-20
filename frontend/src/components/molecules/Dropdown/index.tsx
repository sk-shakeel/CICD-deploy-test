import {
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material'
import React from 'react'
import Theme from '../../../theme'
import CustomIcon from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'

interface DropdownProps {
  fields?: any
  onChange: Function
  value: string
  width?: string
  height?: string
  placeholder?: string
  label?: string
  placeholderMargin?: number
  id?: string
  text?: string[]
  renderValue?: (value: unknown) => React.ReactNode
}
const DropdownIcon = () => (
  <CustomIcon src="../assets/images/dropdown.svg" alt="dropdown image" />
)
const Dropdown = (props: DropdownProps) => {
  return (
    <Stack
      direction={'column'}
      justifyContent={'flex-start'}
      alignItems={'flext-start'}
      gap={'0.5vh'}
    >
      <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
        {props.label}
      </TypographyComponent>
      <FormControl>
        {props.value.length <= 0 && (
          <InputLabel
            sx={{
              color: Theme.palette.text.low,
              marginTop: props.placeholderMargin,
              fontStyle: Theme.typography.b3,
            }}
          >
            {props.placeholder}
          </InputLabel>
        )}
        <TextField
          data-testid={props.id}
          id={props.id}
          type="text"
          select
          value={props.value}
          onChange={(e) => {
            props.onChange(e)
          }}
          sx={{}}
          InputProps={{
            sx: {
              fontStyle: Theme.typography.b3,
              color: Theme.palette.text.high,
            },
          }}
          SelectProps={{
            style: {
              borderColor: `1px solid ${Theme.palette.stroke[50]}`,
              borderRadius: Theme.spacing(2),
              width: props.width,
              height: props.height,
              paddingRight: '1vw',
              alignContent: 'center',
              backgroundColor: Theme.palette.structural.white,
            },
            IconComponent: DropdownIcon,
            renderValue: props.renderValue,
          }}
        >
          {props.fields.map((field: any, idx: number) => (
            <MenuItem
              key={field}
              value={field}
              sx={{
                width: props.width,
                fontStyle: Theme.typography.b2,
                color: Theme.palette.text.low,
              }}
            >
              <Stack
                width={props.width}
                direction={'column'}
                alignItems={'flex-start'}
              >
                {field}
                {props.text && (
                  <TypographyComponent
                    variant="c2"
                    color={Theme.palette.text.low}
                  >
                    {props.text[idx]}
                  </TypographyComponent>
                )}
              </Stack>
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Stack>
  )
}

export default Dropdown
