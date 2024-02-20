import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TypographyComponent, { TypographyProps } from '.'
import { ThemeProvider } from '@emotion/react'
import Theme from '../../../theme'

export default {
  title: 'Atoms/Typography',
  component: TypographyComponent,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'subTitle1',
        'subTitle2',
        'subTitle3',
        'b1',
        'b2',
        'b3',
        'c1',
        'c2',
      ],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as Meta

const Template: StoryFn<TypographyProps> = (args) => (
  <TypographyComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'b1',
  children: 'Hello, world',
  style: { color: Theme.palette.text.low },
}
