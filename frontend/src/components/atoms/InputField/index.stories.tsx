import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { InputField } from '.'
import theme from '../../../theme'
import { ThemeProvider } from '@mui/material'

export default {
  title: 'Atoms/InputField',
  component: InputField,
  argTypes: {
    variant: {
      options: ['standard', 'outlined', 'filled'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },

    helperText: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: 'text',
    },

    select: {
      control: {
        type: 'radio',
      },
      options: [true, false],
    },
  },
} as Meta<typeof InputField>

const temp: StoryFn<typeof InputField> = (args) => (
  <ThemeProvider theme={theme}>
    <InputField {...args} />
  </ThemeProvider>
)

export const TextField = temp.bind({})
TextField.args = {
  variant: 'outlined',
  value: 'Airlines',
  inputSize: '0.8rem',
  width: '10vw',
  borderRadius: theme.spacing(2),
  height: '3vh',
  borderColor: theme.palette.stroke?.[50],
}
export const TextFieldWithStartIcon = temp.bind({})
TextFieldWithStartIcon.args = {
  variant: 'outlined',
  starticon: <img src="../assets/images/search.svg" alt="img not found" />,
  onChange: () => {
    console.log('onChange')
  },
  inputSize: '0.8rem',
  width: '15vw',
  height: '3vh',
  borderRadius: theme.spacing(3),
  borderColor: theme.palette.stroke?.[50],
}
