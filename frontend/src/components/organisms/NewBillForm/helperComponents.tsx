import { Box, Stack } from '@mui/material'
import React, { useContext, useState } from 'react'
import Theme from '../../../theme'
import CustomIcon from '../../atoms/Icon'
import LabelPlusInput from '../../molecules/LabelPlusInput'
import {
  AmountDetailsType,
  changeAmount,
  changeInput,
  dropdownChange,
} from './utils'
import Dropdown from '../../molecules/Dropdown'
import TypographyComponent from '../../atoms/Typography'
import CustomChip from '../../atoms/Chip'
import styled from '@emotion/styled'
import { FormFilledContext } from '../../../App'

interface AmountDetailsProps {
  id: number
  deleteamountdetails: any
  amountdetail: AmountDetailsType
  amountdetails: AmountDetailsType[]
  setAmountdetails: React.Dispatch<React.SetStateAction<AmountDetailsType[]>>
}

const StyledStack = styled(Stack)`
  width: 22vw;
  background-color: ${Theme.palette.structural[50]};
  padding: 1vh 0.4vw;
`

export const AmountDetails = (props: AmountDetailsProps) => {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [classType, setClass] = useState('')
  const [job, setJob] = useState('')
  const { setFormFilled } = useContext(FormFilledContext)
  return (
    <StyledStack
      direction={'column'}
      gap={'1.5vh'}
      border={'1px solid' + Theme.palette.stroke[100]}
      borderRadius={'4px'}
    >
      <Box display={'inherit'} justifyContent={'flex-end'}>
        <CustomIcon
          data-testid="delete"
          onClick={() => {
            props.deleteamountdetails(
              props.id,
              props.setAmountdetails,
              props.amountdetails.length
            )
            setFormFilled(true)
          }}
          src="../assets/images/trash.svg"
          alt="trash"
        />
      </Box>
      <LabelPlusInput
        id="amount"
        width="22vw"
        label={'Amount'}
        color={Theme.palette.text.medium}
        value={amount}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          changeAmount(
            String(e.target.value),
            setAmount,
            props.id,
            props.setAmountdetails
          )
          setFormFilled(true)
        }}
      />
      <LabelPlusInput
        id="desc"
        width="22vw"
        label={'Quickbook description'}
        color={Theme.palette.text.medium}
        value={description}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          changeInput(
            e.target.value,
            setDescription,
            props.id,
            props.setAmountdetails
          )
          setFormFilled(true)
        }}
      />
      <Dropdown
        id="cat"
        label="Category"
        width="22vw"
        height="3vh"
        onChange={(e: { target: { value: any } }) => {
          dropdownChange(
            e.target.value,
            setCategory,
            'category',
            props.id,
            props.setAmountdetails
          )
          setFormFilled(true)
        }}
        value={category}
        fields={['Expense', 'Travel', 'Travel Meals', 'Hotels']}
      />
      <Dropdown
        id="class"
        label="Class"
        width="22vw"
        height="3vh"
        onChange={(e: { target: { value: any } }) => {
          dropdownChange(
            e.target.value,
            setClass,
            'classType',
            props.id,
            props.setAmountdetails
          )
          setFormFilled(true)
        }}
        value={classType}
        fields={['Rent']}
      />
      <Dropdown
        id="job"
        label="Custom/job"
        width="22vw"
        height="3vh"
        onChange={(e: { target: { value: any } }) => {
          dropdownChange(
            e.target.value,
            setJob,
            'job',
            props.id,
            props.setAmountdetails
          )
          setFormFilled(true)
        }}
        value={job}
        fields={['Manager', 'Employee']}
      />
      <Stack direction={'row'} gap={'1vw'} alignItems={'center'}>
        <CustomChip
          variant={'filled'}
          bgColor={Theme.palette.structural[50]}
          borderColor={Theme.palette.stroke[50]}
          deleteIcon={
            <CustomIcon src="../assets/images/close.svg" alt="close" />
          }
          height="3vh"
          width="5vw"
          hoverBackgroundColor={Theme.palette.structural[50]}
          label="Billable"
          textColor={Theme.palette.primary[500]}
        />
      </Stack>
    </StyledStack>
  )
}

export const PaymentDetails = () => {
  const today: Date = new Date()
  const formattedDate = today.toLocaleDateString()
  return (
    <Stack>
      <StyledStack direction={'column'} gap={'1.5vh'}>
        <Stack direction={'column'} alignItems={'flex-start'} gap={'0.7vh'}>
          <LabelPlusInput
            label={'ACH send date'}
            color={Theme.palette.text.medium}
            borderradius={Theme.spacing(3)}
            value={formattedDate}
            width="11vw"
          />
          <CustomIcon src="../assets/images/down_arrow.svg" alt="down-arrow" />
          <Stack>
            <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
              ACH delivery time
            </TypographyComponent>
            <TypographyComponent variant="c1" color={Theme.palette.text.medium}>
              5 working days
            </TypographyComponent>
          </Stack>
          <CustomIcon src="../assets/images/down_arrow.svg" alt="down-arrow" />
          <LabelPlusInput
            label={'Vendor recieve date'}
            color={Theme.palette.text.medium}
            borderradius={Theme.spacing(3)}
            value={formattedDate}
            width="11vw"
          />
        </Stack>
        <LabelPlusInput
          label={'Pay from account'}
          color={Theme.palette.text.medium}
          borderradius={Theme.spacing(2)}
          value="Manual account 1873"
          width="22vw"
        />
        <LabelPlusInput
          label={'Send payment to'}
          color={Theme.palette.text.medium}
          borderradius={Theme.spacing(2)}
          value="Gold Mining Outfitters (8532)"
          width="22vw"
        />
      </StyledStack>
      <Stack gap={'1vh'}>
        <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
          To be approved by
        </TypographyComponent>
        <Stack
          direction={'row'}
          px={'1vw'}
          bgcolor={Theme.palette.structural.white}
          height={'5vh'}
          border={'1px solid' + Theme.palette.stroke[50]}
          alignItems={'center'}
          justifyContent={'flex-start'}
          gap={'1vw'}
        >
          <CustomIcon src="../assets/images/check.svg" alt="check" />
          <TypographyComponent
            variant="b2"
            color={Theme.palette.accent.green100}
          >
            Auto approved
          </TypographyComponent>
          <CustomIcon
            src="../assets/images/info1.svg"
            alt="info"
            height="40%"
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
