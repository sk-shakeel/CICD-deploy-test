import React from 'react'
import { Story, Meta } from '@storybook/react'
import NewBillForm from '.'
import { paymentType, paymentTypeValues } from '../../../utils/constants'

export default {
  title: 'Organisms/NewBillForm',
  component: NewBillForm,
} as Meta

const Template: Story = (args) => (
  <NewBillForm
    billDetails={paymentTypeValues}
    setBillDetails={() => {}}
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {}
