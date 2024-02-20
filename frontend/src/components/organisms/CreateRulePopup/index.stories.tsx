import React from 'react'
import { Story, Meta } from '@storybook/react'
import CreateRulePopup from '.'

export default {
  title: 'Organisms/CreateRulePopup',
  component: CreateRulePopup,
} as Meta

const Template: Story = (args) => (
  <CreateRulePopup setFlag={() => {}} {...args} />
)

export const Default = Template.bind({})
Default.args = {}
