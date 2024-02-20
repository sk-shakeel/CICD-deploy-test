import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import CustomButton from './index'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../../theme'

export default {
  title: 'Atoms/Button',
  component: CustomButton,
  argTypes: {
    onClick: Function,
  },
} as Meta

const Template: StoryFn<typeof CustomButton> = ({ ...args }) => (
  <CustomButton {...args}>Button</CustomButton>
)

export const ContainedButton = Template.bind({})
ContainedButton.args = {
  variant: 'contained',
  height: '40px',
  width: '100px',
  bgColor: Theme.palette.primary[500],
}
export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
  variant: 'outlined',
  height: '40px',
  width: '100px',
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  variant: 'contained',
  height: '40px',
  width: '100px',
  disabled: true,
}
