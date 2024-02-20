import { Story, Meta } from '@storybook/react'
import { CustomChip } from '.'
import Theme from '../../../theme'

export default {
  title: 'Atoms/Chip',
  component: CustomChip,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<typeof CustomChip> = (args) => <CustomChip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Lyft',
  bgColor: Theme.palette.structural?.white,
  deleteIcon: <img src="../assets/images/close.svg" />,
  hoverBackgroundColor: Theme.palette.structural?.white,
  width: '5vw',
  height: '3vh',
  borderColor: Theme.palette.stroke?.[50],
}
