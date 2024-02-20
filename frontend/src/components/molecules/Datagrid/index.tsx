import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridSortModel,
} from '@mui/x-data-grid'
import React from 'react'

interface CustomDataGridProps {
  rows: any[]
  columns: GridColDef[]
  sortModel?: GridSortModel
  onSortModelChange?: (
    model: GridSortModel,
    details: GridCallbackDetails<any>
  ) => void
}

const CustomDataGrid = (props: CustomDataGridProps) => {
  return (
    <DataGrid
      columns={props.columns}
      rows={props.rows}
      checkboxSelection
      hideFooter
      sortingOrder={['desc']}
      columnBuffer={9}
      sortModel={props.sortModel}
      onSortModelChange={props.onSortModelChange}
    />
  )
}

export default CustomDataGrid
