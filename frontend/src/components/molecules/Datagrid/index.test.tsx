import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GridColDef } from '@mui/x-data-grid'
import CustomDataGrid from '.'

describe('CustomDataGrid', () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
  ]

  const rows = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 28 },
  ]

  it('renders the data grid with specified columns and rows', () => {
    render(<CustomDataGrid columns={columns} rows={rows} />)
  })
})
