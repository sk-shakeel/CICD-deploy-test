import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { InputField } from '../../atoms/InputField'
import IconText from '../../molecules/IconText'
import Theme from '../../../theme'
import CustomIcon from '../../atoms/Icon'
import CustomButton from '../../atoms/Button'
import { PaymentTableColumns } from './helperComponents'
import CustomDataGrid from '../../molecules/Datagrid'
import { GridSortModel } from '@mui/x-data-grid'

interface PaymentTableProps {
  rows: any[]
}

const PaymentTable = (props: PaymentTableProps) => {
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'paymentDate',
      sort: 'desc',
    },
  ])
  return (
    <Stack direction={'column'} gap={'1vh'}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} gap={'1vw'}>
          <InputField
            id="search"
            starticon={<CustomIcon src="../assets/images/search.svg" />}
            value={''}
            bgcolor={Theme.palette.structural.white}
            borderRadius={Theme.spacing(3)}
            placeholder="Search Cards"
            textColor={Theme.palette.text.medium}
            fontStyle={Theme.typography.c2}
            borderColor={Theme.palette.stroke[100]}
            height="3vh"
            width="30vw"
          />
          <IconText />
        </Stack>
        <CustomButton
          variant={'contained'}
          bgColor={Theme.palette.structural.white}
          hoverBgColor={Theme.palette.structural.white}
          border={'1px solid' + Theme.palette.structural[100]}
          width={'8vw'}
          height={'3.5vh'}
          textTransform="none"
          textColor={Theme.palette.text.medium}
          fontStyle={Theme.typography.b2}
          shadow
          startIcon={<CustomIcon src="../assets/images/down.svg" alt="down" />}
        >
          Download
        </CustomButton>
      </Stack>
      <CustomDataGrid
        columns={PaymentTableColumns}
        rows={props.rows}
        sortModel={sortModel}
        onSortModelChange={(newModel) => setSortModel(newModel)}
      />
    </Stack>
  )
}

export default PaymentTable
