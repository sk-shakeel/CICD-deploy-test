import { Story, Meta } from '@storybook/react'
import ButtonImage from '.'

export default {
  title: 'Molecules/ButtonImage',
  component: ButtonImage,
} as Meta

const Template: Story = (args) => <ButtonImage {...args} />

export const Default = Template.bind({})
