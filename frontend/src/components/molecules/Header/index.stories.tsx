import { Story, Meta } from '@storybook/react'
import Header from '.'

export default {
  title: 'Molecules/Header',
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
