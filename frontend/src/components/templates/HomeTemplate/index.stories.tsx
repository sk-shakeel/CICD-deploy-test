import { Meta, Story } from '@storybook/react'
import HomeTemplate from '.'
import Header from '../../molecules/Header'
import Footer from '../../molecules/Footer'
import { Box } from '@mui/material'

export default {
  title: 'Template/HomeTemplate',
  component: HomeTemplate,
} as Meta

const Template: Story<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  header: <Header />,
  main: <Box height={'75vh'} width={'100vw'}></Box>,
  footer: <Footer value={919} />,
}
