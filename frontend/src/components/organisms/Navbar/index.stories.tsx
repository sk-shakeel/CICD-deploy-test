import { Story, Meta } from '@storybook/react'
import Navbar from '.'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
} as Meta

const Template: Story = (args) => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
