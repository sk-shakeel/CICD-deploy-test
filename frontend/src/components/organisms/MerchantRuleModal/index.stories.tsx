import React from 'react'
import { Story, Meta } from '@storybook/react'
import MerchantRuleModal from '.'

export default {
  title: 'Organisms/MerchantRuleModal',
  component: MerchantRuleModal,
} as Meta

const Template: Story = () => (
  <MerchantRuleModal
    merchantRuleCount={0}
    setMerchantRuleCount={() => {}}
    open={true}
    setOpen={() => {}}
  />
)

export const Default = Template.bind({})
