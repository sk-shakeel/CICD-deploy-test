import React from 'react'
import { Meta, Story } from '@storybook/react'
import SkipBanner from '.'

export default {
  title: 'Organisms/SkipBanner',
  component: SkipBanner,
} as Meta

const Template: Story = (args) => <SkipBanner {...args} />

export const Default = Template.bind({})
Default.args = {}
