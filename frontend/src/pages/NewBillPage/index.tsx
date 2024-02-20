import React, { useContext, useState } from 'react'
import HomeTemplate from '../../components/templates/HomeTemplate'
import { Box, Divider, Stack } from '@mui/material'
import CustomIcon from '../../components/atoms/Icon'
import TypographyComponent from '../../components/atoms/Typography'
import Theme from '../../theme'
import NewBillForm from '../../components/organisms/NewBillForm'
import SkipBanner from '../../components/organisms/SkipBanner'
import EditBill from '../../components/organisms/EditBill'
import { paymentType, paymentTypeValues } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { addPayment } from '../../utils/services'
import { FormFilledContext, PaymentsLoaderContext } from '../../App'

const NewBillPageHeader = () => {
  const navigate = useNavigate()

  return (
    <Stack
      direction={'row'}
      gap={'1vw'}
      height={'6vh'}
      padding={'1vh 1vw'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      bgcolor={Theme.palette.structural[50]}
      borderBottom={'1px solid ' + Theme.palette.stroke[100]}
    >
      <Box
        data-testId="back"
        onClick={() => {
          navigate(-1)
        }}
        sx={{ cursor: 'pointer' }}
      >
        <CustomIcon src="../assets/images/cross.svg" alt="cross" />
      </Box>
      <Divider
        orientation="vertical"
        sx={{
          maxHeight: '2vh',
          border: '0.5px solid ' + Theme.palette.stroke[100],
        }}
      ></Divider>
      <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
        Get Started
      </TypographyComponent>
    </Stack>
  )
}
const NewBillPageMain = () => {
  const [filled, setFilled] = useState(false)
  const [billDetails, setBillDetails] = useState<paymentType>(paymentTypeValues)
  const navigate = useNavigate()
  const { paymentsLoader, setPaymentsLoader } = useContext(
    PaymentsLoaderContext
  )
  const { setFormFilled } = useContext(FormFilledContext)
  return (
    <Stack gap={'3vw'} direction={'row'} justifyContent={'center'}>
      <SkipBanner />
      {!filled && (
        <NewBillForm
          billDetails={billDetails}
          setBillDetails={setBillDetails}
          reviewBill={() => {
            if (
              billDetails.vendor.amount > 0 &&
              billDetails.vendorContact &&
              billDetails.paymentType &&
              billDetails.invoiceNo
            )
              setFilled(true)
          }}
        />
      )}
      {filled && (
        <EditBill
          amount={billDetails.vendor.amount ?? 0}
          company={billDetails.vendor.name ?? 'Gold Mining Outfitters'}
          payment={billDetails.paymentType ?? 'ACH'}
          scheduledDate={String(billDetails.sendDate)}
          arrivalDate={String(billDetails.recieveDate)}
          createBill={() => {
            addPayment(billDetails)
            setPaymentsLoader(!paymentsLoader)
            navigate('/payments')
          }}
          editClick={() => {
            setFilled(false)
            setFormFilled(false)
          }}
        />
      )}
      <Stack
        width={'25vw'}
        justifyContent={'space-around'}
        alignItems={'center'}
        bgcolor={Theme.palette.structural.white}
      >
        <CustomIcon src="../assets/images/pdf.svg" alt="pdf" />
      </Stack>
    </Stack>
  )
}
const NewBillPage = () => {
  return (
    <HomeTemplate
      header={<NewBillPageHeader />}
      main={<NewBillPageMain />}
      bgcolor={Theme.palette.structural[50]}
    />
  )
}

export default NewBillPage
