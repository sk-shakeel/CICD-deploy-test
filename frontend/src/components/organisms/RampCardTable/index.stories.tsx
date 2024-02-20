import React from 'react'
import { Story, Meta } from '@storybook/react'
import RampCardTable from '.'
import { RampCardTableRows } from '../../../utils/constants'

export default {
  title: 'Organisms/RampCardTable',
  component: RampCardTable,
} as Meta

const Template: Story = (args) => (
  <RampCardTable rows={RampCardTableRows} {...args} />
)

export const Default = Template.bind({})
Default.args = {}
