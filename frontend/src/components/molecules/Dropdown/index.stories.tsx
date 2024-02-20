import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import Dropdown from '.'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta

const Template: StoryFn<typeof Dropdown> = (args: JSX.IntrinsicAttributes) => {
  const [val, setVal] = useState('')

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setVal(e.target.value as string)
  }

  return <Dropdown {...args} onChange={handleChange} value={val} />
}

export const Basic = Template.bind({})
Basic.args = {
  fields: ['Option 1', 'Option 2', 'Option 3'],
  width: '9vw',
  height: '4vh',
  placeholder: 'Choose one',
  label: 'QuickBooks Category',
  placeholderMargin: -2,
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  fields: ['Option 1', 'Option 2', 'Option 3'],
  width: '17vw',
  height: '3.2vh',
  placeholder: 'Choose one',
  label: 'QuickBooks Category',
  placeholderMargin: -3,
}
