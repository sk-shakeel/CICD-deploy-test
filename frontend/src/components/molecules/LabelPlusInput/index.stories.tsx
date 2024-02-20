import { Story, Meta } from '@storybook/react'
import LabelPlusInput from '.'
import Theme from '../../../theme'

export default {
  title: 'Molecules/LabelPlusInput',
  component: LabelPlusInput,
} as Meta

const Template: Story<typeof LabelPlusInput> = (args) => (
  <LabelPlusInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Ramp category',
  color: Theme.palette.text.low,
}
