import React from 'react'
import { Meta, Story } from '@storybook/react'
import { GridColDef } from '@mui/x-data-grid'
import CustomDataGrid from '.'

export default {
  title: 'Molecules/CustomDataGrid',
  component: CustomDataGrid,
} as Meta

const Template: Story<typeof CustomDataGrid> = (args) => (
  <CustomDataGrid {...args} />
)

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
]

const rows = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 28 },
]

export const Dummy = Template.bind({})
Dummy.args = {
  columns,
  rows,
}
