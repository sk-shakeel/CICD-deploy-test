import { Stack } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import { InputField } from '../../atoms/InputField'
import CustomIcon from '../../atoms/Icon'
import Theme from '../../../theme'
import { searchRamp } from './utils'
import IconText from '../../molecules/IconText'
import CustomChip from '../../atoms/Chip'
import { RampCardTableColumns, SuggestionPannel } from './helperComponents'
import CustomButton from '../../atoms/Button'
import { ClearFilter, Filter, Sync } from '../../../utils/constants'
import CustomDataGrid from '../../molecules/Datagrid'

interface RampCardTableProps {
  rows: any[]
  setResultLength?: React.Dispatch<SetStateAction<number>>
}

const RampCardTable = (props: RampCardTableProps) => {
  const [tableRows, setTableRows] = useState(props.rows)
  const [searchValue, setSearchValue] = useState('')
  const [suggestionFlag, setSuggestionFlag] = useState(false)
  const [chip, setChip] = useState(false)
  useEffect(() => {
    setTableRows(props.rows)
  }, [props.rows])

  useEffect(() => {
    if (props.setResultLength) props.setResultLength(tableRows.length)
  }, [tableRows])
  return (
    <Stack gap={'2vh'}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} gap={'1vw'}>
          <InputField
            id="search"
            onChange={(e) => {
              searchRamp(
                e,
                setSearchValue,
                setSuggestionFlag,
                props.rows,
                setTableRows,
                setChip
              )
            }}
            starticon={<CustomIcon src="../assets/images/search.svg" />}
            value={searchValue}
            bgcolor={Theme.palette.structural.white}
            borderRadius={Theme.spacing(3)}
            placeholder="Search Cards"
            textColor={
              searchValue.length > 0
                ? Theme.palette.text.high
                : Theme.palette.text.medium
            }
            fontStyle={Theme.typography.c2}
            borderColor={Theme.palette.stroke[100]}
            height="3vh"
            width="30vw"
          />
          <IconText />
          {chip && (
            <CustomChip
              height="3vh"
              width="5vw"
              variant={'filled'}
              borderColor={Theme.palette.structural[100]}
              bgColor={Theme.palette.structural.white}
              hoverBackgroundColor={Theme.palette.structural.white}
              deleteIcon={
                <CustomIcon src="../assets/images/close.svg" alt="close" />
              }
              textColor={Theme.palette.primary[500]}
              label={searchValue}
            />
          )}
        </Stack>
        <Stack direction={'row'} gap={'1vw'}>
          <CustomButton
            variant="contained"
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            width={'8vw'}
            height={'3vh'}
            fontStyle={Theme.typography.b2}
            textColor={Theme.palette.text.low}
            startIcon={
              <CustomIcon
                width="80%"
                src="../assets/images/cross.svg"
                alt="cross"
              />
            }
            textTransform="none"
          >
            {ClearFilter}
          </CustomButton>
          <CustomButton
            variant="contained"
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            width={'5vw'}
            height={'3vh'}
            fontStyle={Theme.typography.b2}
            textColor={Theme.palette.primary[500]}
            startIcon={
              <CustomIcon src="../assets/images/filter.svg" alt="cross" />
            }
            textTransform="none"
          >
            {Filter}
          </CustomButton>
          <CustomButton
            variant="contained"
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            width={'4vw'}
            height={'3vh'}
            fontStyle={Theme.typography.b2}
            textColor={Theme.palette.text.medium}
            textTransform="none"
            shadow
            border={'1px solid' + Theme.palette.stroke[100]}
          >
            {Sync}
          </CustomButton>
        </Stack>
      </Stack>
      <SuggestionPannel
        open={suggestionFlag}
        setOpen={setSuggestionFlag}
        setSearchValue={setSearchValue}
        tableRows={props.rows}
        setTableRows={setTableRows}
        searchValue={searchValue}
        setChip={setChip}
      />
      <CustomDataGrid rows={tableRows} columns={RampCardTableColumns} />
    </Stack>
  )
}

export default RampCardTable
