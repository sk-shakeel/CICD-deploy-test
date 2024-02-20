import React, { useContext, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from '../../components/organisms/Navbar'
import HomeTemplate from '../../components/templates/HomeTemplate'
import Header from '../../components/molecules/Header'
import Footer from '../../components/molecules/Footer'
import TypographyComponent from '../../components/atoms/Typography'
import Theme from '../../theme'
import CustomIcon from '../../components/atoms/Icon'
import CustomButton from '../../components/atoms/Button'
import PaymentTable from '../../components/organisms/PaymentTable'
import { getPayments } from '../../utils/services'
import { useNavigate } from 'react-router-dom'
import { PaymentsLoaderContext } from '../../App'

interface PaymentsPageMainProps {
  rows: any[]
}

const PaymentsPageMain = (props: PaymentsPageMainProps) => {
  const navigate = useNavigate()
  return (
    <Stack direction={'column'} height={'80vh'} gap={'2vh'}>
      <Navbar />
      <Stack direction={'column'} gap={'4vh'} padding={'2vh 2.5vw 1vh 2.5vw'}>
        <Box
          justifyContent={'space-between'}
          alignItems={'center'}
          display={'flex'}
        >
          <TypographyComponent variant="h1" color={Theme.palette.text.high}>
            Payments
          </TypographyComponent>
          <Stack direction={'row'} gap={'2vw'}>
            <CustomIcon src="../assets/images/spread.svg" alt="spread" />
            <CustomButton
              variant="contained"
              bgColor={Theme.palette.structural.white}
              hoverBgColor={Theme.palette.structural.white}
              width={'5vw'}
              height={'4vh'}
              textColor={Theme.palette.text.medium}
              borderRadius={'4px'}
              border={'1px solid' + Theme.palette.stroke[50]}
              shadow
              textTransform="none"
              onClick={() => {
                navigate('/newBill')
              }}
            >
              New Bill
            </CustomButton>
          </Stack>
        </Box>
        <PaymentTable rows={props.rows} />
      </Stack>
    </Stack>
  )
}
const PaymentsPage = () => {
  const [paymentsData, setPaymentsData] = useState([])
  const [countResult, setCountResult] = useState(0)
  const { paymentsLoader } = useContext(PaymentsLoaderContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPayments()
        setPaymentsData(response)
        setCountResult(response.length)
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [paymentsLoader])
  return (
    <HomeTemplate
      header={<Header />}
      main={<PaymentsPageMain rows={paymentsData} />}
      footer={<Footer value={countResult} />}
    />
  )
}

export default PaymentsPage
