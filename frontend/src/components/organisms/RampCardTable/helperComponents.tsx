import { Box, Divider, Modal, Stack, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Theme from '../../../theme'
import TypographyComponent from '../../atoms/Typography'
import {
  SuggestionPannelSearchText1,
  SuggestionPannelSearchTip,
  SuggestionPannelText,
} from '../../../utils/constants'
import CustomIcon from '../../atoms/Icon'
import { search, selectQuickBook } from './utils'
import { GridColDef } from '@mui/x-data-grid'
import Dropdown from '../../molecules/Dropdown'
import CustomButton from '../../atoms/Button'
import {
  CategoriesContext,
  MerchantRuleContext,
  MerchantRuleDataContext,
  RampRuleContext,
} from '../../../App'

interface SuggestionPannelProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  tableRows: any[]
  setTableRows: React.Dispatch<React.SetStateAction<any[]>>
  setChip: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledStack = styled(Stack)`
  padding: 1vh 1.5vw;
  height: 4vh;
  cursor: pointer;
`

export const SuggestionPannel = (props: SuggestionPannelProps) => {
  return (
    <Modal
      className="suggestion-pannel"
      open={props.open}
      onClose={() => props.setOpen(false)}
      style={{
        position: 'absolute',
        top: '36.9vh',
        left: '2.3vw',
      }}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'transparent',
          },
        },
      }}
    >
      <Box
        display={'block'}
        bgcolor={Theme.palette.structural.white}
        border={'1px solid' + Theme.palette.stroke[100]}
        width={'40vw'}
        borderRadius={'6px'}
      >
        <StyledStack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <TypographyComponent
            variant="subTitle2"
            color={Theme.palette.text.low}
          >
            {SuggestionPannelText} &nbsp;
          </TypographyComponent>
          <TypographyComponent
            variant="subTitle2"
            color={Theme.palette.text.medium}
          >
            {props.searchValue}
          </TypographyComponent>
        </StyledStack>
        <Divider
          sx={{ borderTop: '1px solid' + Theme.palette.stroke[50] }}
        ></Divider>
        <StyledStack justifyContent={'center'} alignItems={'flex-start'}>
          <TypographyComponent
            variant="subTitle3"
            color={Theme.palette.text.low}
          >
            {SuggestionPannelSearchText1}
          </TypographyComponent>
        </StyledStack>
        <StyledStack
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          onClick={() => {
            search(
              props.searchValue,
              props.setOpen,
              props.setSearchValue,
              props.tableRows,
              props.setTableRows,
              props.setChip
            )
          }}
        >
          <TypographyComponent
            variant="subTitle3"
            color={Theme.palette.text.high}
          >
            {props.searchValue}
          </TypographyComponent>
        </StyledStack>
        <StyledStack
          direction={'row'}
          gap={'0.6vw'}
          justifyContent={'flex-start'}
          bgcolor={Theme.palette.structural[50]}
          alignItems={'center'}
        >
          <CustomIcon src="../assets/images/help.svg" alt="help" />
          <TypographyComponent
            variant="subTitle3"
            color={Theme.palette.text.medium}
          >
            {SuggestionPannelSearchTip}
          </TypographyComponent>
        </StyledStack>
      </Box>
    </Modal>
  )
}

export const RampCardTableColumns: GridColDef[] = [
  {
    field: 'meta',
    headerName: 'TRANSACTIONS',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Stack
          flex={1}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction={'column'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {params.row.meta.brand}
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.low}>
              {params.row.meta.name}
            </TypographyComponent>
          </Stack>
          <CustomIcon src="../assets/images/eye.svg" alt="eye" />
        </Stack>
      )
    },
  },
  {
    field: 'amount',
    headerName: 'AMOUNT',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Stack flex={1} alignItems={'flex-end'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            ${params.row.amount}
          </TypographyComponent>
        </Stack>
      )
    },
  },
  {
    field: 'date',
    headerName: 'DATE',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Stack
          data-testid={'date' + params.row.id}
          flex={1}
          alignItems={'flex-start'}
        >
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {params.row.date.substring(0, 10)}
          </TypographyComponent>
        </Stack>
      )
    },
  },
  {
    field: 'user',
    headerName: 'USER',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Stack flex={1} direction={'column'} alignItems={'flex-start'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {params.row.user.name}
          </TypographyComponent>
          <TypographyComponent variant="b3" color={Theme.palette.text.low}>
            ({params.row.user.virtualId})
          </TypographyComponent>
        </Stack>
      )
    },
  },
  {
    field: 'Quickbooks Category',
    headerName: 'QUICKBOOKS CATEGORY',
    flex: 1,
    renderCell: (params: any) => {
      return <DropdownCell merchantName={params.row.meta.brand} />
    },
  },
  {
    field: 'receiptId',
    headerName: 'RECEIPT',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Stack flex={1} alignItems={'flex-start'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {params.row.receiptId}
          </TypographyComponent>
        </Stack>
      )
    },
  },
  {
    field: 'Memo',
    headerName: 'MEMO',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Stack flex={1} alignItems={'flex-start'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {params.row.memo}
          </TypographyComponent>
        </Stack>
      )
    },
  },
  {
    field: 'Sync',
    headerName: 'SYNC',
    flex: 1,
    renderCell: () => {
      return (
        <Stack flex={1} alignItems={'flex-start'}>
          <CustomButton
            variant={'contained'}
            shadow
            fontStyle={Theme.typography.b2}
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            textTransform="none"
            textColor={Theme.palette.text.medium}
            borderRadius={'4px'}
            border={Theme.palette.stroke[100]}
          >
            Make ready
          </CustomButton>
        </Stack>
      )
    },
  },
]
interface DropdownCellProps {
  merchantName: string
}
export const DropdownCell = (props: DropdownCellProps) => {
  const { merchantRuleData } = useContext(MerchantRuleDataContext)
  const { setCreateMerchantRule } = useContext(MerchantRuleContext)
  const { setRampRule } = useContext(RampRuleContext)
  const [quickbooks, setQuickbooks] = useState('')
  const { categories } = useContext(CategoriesContext)

  useEffect(() => {
    const rule: any = merchantRuleData.find(
      (r: any) => r.merchantName === props.merchantName
    )
    const rampcategories: any = categories.find(
      (c: any) => c.name === 'QUICKBOOKS'
    )
    let category
    if (rampcategories) {
      if (rule) {
        category = rampcategories.types.find(
          (c: any) => c.id === rule.quickBooksCategoryId
        )
      }
      if (category) setQuickbooks(category.name ?? '')
    }
  }, [merchantRuleData])
  return (
    <Dropdown
      onChange={(e: any) => {
        selectQuickBook(
          e,
          categories,
          setQuickbooks,
          setRampRule,
          props.merchantName
        )
        setCreateMerchantRule(true)
      }}
      value={quickbooks}
      fields={['Expense', 'Travel', 'Travel Meals', 'Hotels']}
      width="9vw"
      height="4vh"
      placeholder="Choose one"
      id="selectQuickBook"
      placeholderMargin={-2}
    />
  )
}
