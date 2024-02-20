import React from 'react'
import EditBill from '.'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/EditBill',
  component: EditBill,
}

const Template: StoryFn<typeof EditBill> = (args) => <EditBill {...args} />

export const Default = Template.bind({})
Default.args = {
  amount: 1000,
  company: 'Gold mining Outfitters',
  payment: 'ACH (Direct deposit)',
  scheduledDate: '2023-09-04',
  arrivalDate: '2023-09-05',
}
