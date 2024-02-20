import { Stack } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'
import CustomIcon from '../../atoms/Icon'
import ButtonImage from '../../molecules/ButtonImage'

export const PaymentTableColumns: GridColDef[] = [
  {
    field: 'vendor',
    headerName: 'VENDOR/AMOUNT',
    flex: 1,
    renderCell: (params) => {
      return (
        <HeadCapCell
          head={params.row.vendor.name}
          cap={'$' + params.row.vendor.amount}
          image={'bank'}
        />
      )
    },
  },
  {
    field: 'paymentStatus',
    headerName: 'PAYMENT STATUS',
    flex: 1,
    renderCell: (params) => {
      return (
        <HeadCapCell
          head={params.row.paymentStatus.payment}
          cap={params.row.paymentStatus.status}
          image={'success'}
        />
      )
    },
  },
  {
    field: 'paymentDate',
    headerName: 'PAYMENT DATE',
    flex: 1,
    renderCell: (params) => {
      return (
        <TypographyComponent variant={'b2'} color={Theme.palette.text.high}>
          {params.row.paymentDate.substring(0, 10)}
        </TypographyComponent>
      )
    },
  },
  {
    field: 'dueDate',
    headerName: 'DUE DATE',
    flex: 1,
    renderCell: (params) => {
      return (
        <TypographyComponent variant={'b2'} color={Theme.palette.text.high}>
          {params.row.dueDate.substring(0, 10)}
        </TypographyComponent>
      )
    },
  },
  {
    field: 'invoiceDate',
    headerName: 'INVOICE DATE',
    flex: 1,
    renderCell: (params) => {
      return (
        <TypographyComponent variant={'b2'} color={Theme.palette.text.high}>
          {params.row.invoiceDate.substring(0, 10)}
        </TypographyComponent>
      )
    },
  },
  {
    field: 'NextStep',
    headerName: 'NEXT STEP',
    flex: 1,
    renderCell: (params) => {
      return <ButtonImage />
    },
  },
]

interface HeadCapCellProps {
  head: string
  cap: string
  image: string
}

const HeadCapCell = (props: HeadCapCellProps) => {
  return (
    <Stack
      flex={1}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Stack direction={'column'}>
        <TypographyComponent variant="b2" color={Theme.palette.text.high}>
          {props.head}
        </TypographyComponent>
        <TypographyComponent variant="b3" color={Theme.palette.text.low}>
          {props.cap}
        </TypographyComponent>
      </Stack>
      <CustomIcon
        src={'../assets/images/' + props.image + '.svg'}
        alt={props.image}
      />
    </Stack>
  )
}
