import { Box, Stack, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Theme from '../../../theme'
import TypographyComponent from '../../atoms/Typography'
import {
  AmountData,
  NewBillFormCaption,
  NewBillFormCaption2,
  NewBillFormDates,
  NewBillFormHeading,
  NewBillFormOwner,
  NewBillFormPaymentTexts,
  NewBillFormQuestion,
  NewBillFormQuestion2,
  addButton,
  paymentType,
} from '../../../utils/constants'
import CustomIcon from '../../atoms/Icon'
import LabelPlusInput from '../../molecules/LabelPlusInput'
import {
  addNewAmountDetails,
  changeDate,
  changeInput,
  deleteAmountDetails,
  selectPayment,
} from './utils'
import { AmountDetails, PaymentDetails } from './helperComponents'
import CustomButton from '../../atoms/Button'
import Dropdown from '../../molecules/Dropdown'
import { convertStringToDate } from '../../../utils/functions'
import { FormFilledContext } from '../../../App'

const StyledStack = styled(Stack)`
  padding: 0.5vh 0.4vw;
`
interface NewBillFormProps {
  billDetails: paymentType
  setBillDetails: React.Dispatch<React.SetStateAction<paymentType>>
  reviewBill?: Function
}

const NewBillForm = (props: NewBillFormProps) => {
  const [vendorContact, setVendorContact] = useState(
    props.billDetails.vendorContact
  )
  const [invoiceNo, setInvoiceNo] = useState(props.billDetails.invoiceNo)
  const [invoiceDate, setInvoiceDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const dates = [invoiceDate, dueDate]
  const setDates = [setInvoiceDate, setDueDate]
  const [quickbooksLocation, setQuickbooksLocation] = useState(
    props.billDetails.quickbooksLocation
  )
  const [memo, setMemo] = useState('')
  const [amountDetails, setAmountDetails] = useState([AmountData])
  const [totalAmount, setTotalAmount] = useState(0)
  const [payment, setPayment] = useState('')

  const { setFormFilled } = useContext(FormFilledContext)
  useEffect(() => {
    let total = 0

    for (const amountDetail of amountDetails) {
      if (amountDetail.amount === '') {
        total += 0
      } else {
        total += parseFloat(amountDetail.amount)
      }
    }

    setTotalAmount(total)
  }, [amountDetails])

  const today = new Date()

  useEffect(() => {
    props.setBillDetails({
      vendor: {
        name: 'Gold Mining',
        amount: totalAmount,
      },
      paymentStatus: {
        payment: 'ACH',
        status: 'SCHEDULED',
      },
      paymentDate: today,
      dueDate: convertStringToDate(dueDate),
      invoiceDate: convertStringToDate(invoiceDate),
      vendorContact: vendorContact,
      invoiceNo: invoiceNo,
      quickbooksLocation: quickbooksLocation,
      paymentType: payment,
      fromAccNo: 8437,
      toAccNo: 77252,
      sendDate: today,
      recieveDate: today,
    })
  }, [
    invoiceDate,
    totalAmount,
    dueDate,
    vendorContact,
    invoiceNo,
    payment,
    quickbooksLocation,
  ])
  return (
    <Stack
      direction={'column'}
      width={'23vw'}
      bgcolor={Theme.palette.structural[50]}
      data-testid="parent-review"
    >
      <StyledStack>
        <TypographyComponent variant="h1" color={Theme.palette.text.high}>
          {NewBillFormHeading}
        </TypographyComponent>
      </StyledStack>
      <Box
        display={'block'}
        maxHeight={'45vh'}
        width={'23vw'}
        sx={{ overflowY: 'scroll' }}
      >
        <StyledStack direction={'column'} gap={'1.5vh'}>
          <Stack
            gap={'1vw'}
            p={'2vh 1.5vw'}
            direction={'row'}
            alignItems={'center'}
            width={'19vw'}
            border={'1px solid' + Theme.palette.stroke[50]}
            borderRadius={'4px'}
          >
            <CustomIcon src="../assets/images/Vector.svg" alt="light" />
            <TypographyComponent variant="c1" color={Theme.palette.text.medium}>
              {NewBillFormCaption}
            </TypographyComponent>
          </Stack>
          <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
            {NewBillFormQuestion}
          </TypographyComponent>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <TypographyComponent
              variant="subTitle2"
              color={Theme.palette.text.high}
            >
              {NewBillFormOwner}
            </TypographyComponent>
            <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
              <CustomIcon src="../assets/images/arrows.svg" alt="arrows" />
              <CustomIcon src="../assets/images/edit.svg" alt="edit" />
            </Stack>
          </Stack>
          <LabelPlusInput
            id="vendor"
            width="22vw"
            label={'Vendor contact'}
            color={Theme.palette.text.medium}
            value={props.billDetails.vendorContact ?? vendorContact}
            onChange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => {
              changeInput(e.target.value, setVendorContact)
              setFormFilled(true)
            }}
            endicon={
              <CustomIcon src="../assets/images/dropdown.svg" alt="dropdown" />
            }
          />
          <Stack>
            <LabelPlusInput
              id="invoice"
              width="22vw"
              label={'Invoice number'}
              color={Theme.palette.text.medium}
              value={invoiceNo}
              onChange={(e: {
                target: { value: React.SetStateAction<string> }
              }) => {
                changeInput(e.target.value, setInvoiceNo)
                setFormFilled(true)
              }}
            />
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'1vh'}
              p={'1vh 0.6vw'}
            >
              <CustomIcon src="../assets/images/home.svg" alt="home" />
              <TypographyComponent
                variant="c1"
                color={Theme.palette.text.medium}
              >
                {NewBillFormCaption2}
              </TypographyComponent>
            </Stack>
          </Stack>
          <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
            {NewBillFormQuestion2}
          </TypographyComponent>
          <Stack direction={'row'} gap={'10px'}>
            {NewBillFormDates.map((date, idx) => (
              <LabelPlusInput
                key={date}
                id="invocie-date"
                width="auto"
                label={date}
                color={Theme.palette.text.medium}
                value={dates[idx]}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> }
                }) => {
                  changeDate(String(e.target.value), dates[idx], setDates[idx])
                  setFormFilled(true)
                }}
                starticon={
                  <CustomIcon src="../assets/images/date.svg" alt="date" />
                }
                borderradius={Theme.spacing(3)}
              />
            ))}
          </Stack>
          <LabelPlusInput
            id="location"
            width="22vw"
            label={'Quickbooks location'}
            color={Theme.palette.text.medium}
            value={quickbooksLocation}
            onChange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => {
              changeInput(e.target.value, setQuickbooksLocation)
              setFormFilled(true)
            }}
          />
          <LabelPlusInput
            id="memo"
            width="22vw"
            label={'Memo'}
            color={Theme.palette.text.medium}
            value={memo}
            onChange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => {
              changeInput(e.target.value, setMemo)
              setFormFilled(true)
            }}
          />
        </StyledStack>
        <Stack direction={'column'} gap={'1vh'} paddingTop={'1vh'}>
          {amountDetails.map((item) => (
            <AmountDetails
              key={item.id}
              deleteamountdetails={deleteAmountDetails}
              id={item.id}
              amountdetail={item}
              setAmountdetails={setAmountDetails}
              amountdetails={amountDetails}
            />
          ))}
        </Stack>
        <StyledStack gap={'1.5vh'}>
          <Stack paddingTop={'1vh'} gap={'4px'}>
            <TypographyComponent variant="c2" color={Theme.palette.text.high}>
              Invoice Total
            </TypographyComponent>
            <TypographyComponent
              variant="subTitle2"
              color={Theme.palette.text.high}
            >
              $ {totalAmount.toFixed(2)}
            </TypographyComponent>
          </Stack>
          <CustomButton
            data-testid="add"
            variant="contained"
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            borderRadius={'4px'}
            border={Theme.palette.stroke[100]}
            shadow
            height={'5vh'}
            width={'10vw'}
            textTransform="none"
            textColor={Theme.palette.text.medium}
            startIcon={<CustomIcon src="../assets/images/add.svg" alt="plus" />}
            onClick={() => {
              addNewAmountDetails(amountDetails, setAmountDetails)
              setFormFilled(true)
            }}
          >
            {addButton}
          </CustomButton>
        </StyledStack>
        <StyledStack>
          <Stack paddingTop={'2.5vh'} gap={'1.5vh'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
              Payment details
            </TypographyComponent>
            <Dropdown
              id="payment"
              label={'Payment type'}
              placeholder="Select"
              placeholderMargin={-3}
              value={payment}
              onChange={(e: { target: { value: any } }) => {
                selectPayment(e.target.value, setPayment)
                setFormFilled(true)
              }}
              renderValue={() => {
                return 'ACH (Direct deposit)'
              }}
              fields={[
                'ACH (Direct deposit)',
                'Check by mail',
                'One-time virtual card',
              ]}
              height="3vh"
              text={NewBillFormPaymentTexts}
            />
          </Stack>
        </StyledStack>
        {payment.length > 0 && <PaymentDetails />}
      </Box>
      <Stack
        direction={'row'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        p={'1vh 3vw 1vh 1vw'}
        gap={'1vw'}
        date-testid="review"
      >
        <CustomButton
          variant={'contained'}
          bgColor={Theme.palette.structural.white}
          hoverBgColor={Theme.palette.structural.white}
          border={'1px solid' + Theme.palette.stroke[50]}
          shadow
          textTransform="none"
          width={'8vw'}
          textColor={Theme.palette.text.medium}
          height={'4vh'}
          borderRadius={'8px'}
        >
          Save changes
        </CustomButton>
        <CustomButton
          variant={'contained'}
          bgColor={Theme.palette.primary[500]}
          hoverBgColor={Theme.palette.primary[500]}
          border={'1px solid' + Theme.palette.stroke[50]}
          textTransform="none"
          textColor={Theme.palette.structural.white}
          width={'5vw'}
          height={'4vh'}
          borderRadius={'8px'}
          onClick={props.reviewBill}
        >
          Review
        </CustomButton>
      </Stack>
    </Stack>
  )
}

export default NewBillForm
