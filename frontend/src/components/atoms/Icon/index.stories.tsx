import { Meta, StoryFn } from '@storybook/react'
import Icon from '.'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Image>

const temp: StoryFn<typeof Image> = (args) => <Icon {...args} />

export const Primary = temp.bind({})
Primary.args = {
  src: '../assets/images/user.svg',
  alt: 'image not found',
}
