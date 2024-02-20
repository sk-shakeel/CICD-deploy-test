import { Meta, StoryFn } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'
import CardMeta from '.'

export default {
  title: 'Molecules/CardMeta',
  component: CardMeta,
} as Meta

const Template: StoryFn<typeof CardMeta> = (args: JSX.IntrinsicAttributes) => (
  <CardMeta merchantValue={0} categoryValue={0} {...args} />
)

export const Default = Template.bind({})
Default.args = {
  merchantValue: 2,
  categoryValue: 1,
}
