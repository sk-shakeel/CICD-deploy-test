import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Molecules/Footer',
  component: Footer,
} as Meta

const Template: Story<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 42,
}
