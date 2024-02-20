import React, { useContext, useEffect, useState } from 'react'
import HomeTemplate from '../../components/templates/HomeTemplate'
import Header from '../../components/molecules/Header'
import Footer from '../../components/molecules/Footer'
import { Box, Stack } from '@mui/material'
import Navbar from '../../components/organisms/Navbar'
import TypographyComponent from '../../components/atoms/Typography'
import Theme from '../../theme'
import CustomButton from '../../components/atoms/Button'
import CardMeta from '../../components/molecules/CardMeta'
import RampCardTable from '../../components/organisms/RampCardTable'
import CreateRulePopup from '../../components/organisms/CreateRulePopup'
import {
  AccountingLoaderContext,
  CategoriesContext,
  MerchantRuleContext,
  MerchantRuleCreateContext,
  MerchantRuleDataContext,
} from '../../App'
import MerchantRuleModal from '../../components/organisms/MerchantRuleModal'
import CategoryRuleModal from '../../components/organisms/CategoryRuleModal'
import {
  getCategories,
  getCategoryRules,
  getMerchantRules,
  getTransaction,
} from '../../utils/services'

interface AccountingPageMainProps {
  transactionData: any[]
  categoriesData: any[]
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openMerchantRuleModal: boolean
  setOpenMerchantRuleModal: React.Dispatch<React.SetStateAction<boolean>>
  openCategoryRuleModal: boolean
  setOpenCategoryRuleModal: React.Dispatch<React.SetStateAction<boolean>>
  merchantRuleCount: number
  setMerchantRuleCount: React.Dispatch<React.SetStateAction<number>>
  categoryRuleCount: number
  setCategoryRuleCount: React.Dispatch<React.SetStateAction<number>>
  categoryRuleData: any[]
  setCategoryRuleData: React.Dispatch<React.SetStateAction<any[]>>
  setResultLength: React.Dispatch<React.SetStateAction<number>>
}

const AccountingPageMain = (props: AccountingPageMainProps) => (
  <Stack direction={'column'} height={'80vh'} gap={'2vh'}>
    <Navbar />
    <Stack direction={'column'} gap={'3vh'} padding={'2vh 2.5vw 1vh 2.5vw'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <TypographyComponent variant="h1" color={Theme.palette.text.high}>
          Ramp Cards
        </TypographyComponent>
        <Stack direction={'row'} gap={'8px'}>
          <CustomButton
            variant="contained"
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            width={'7vw'}
            height={'4vh'}
            textColor={Theme.palette.text.medium}
            borderRadius={'4px'}
            border={'1px solid' + Theme.palette.stroke[50]}
            shadow
            textTransform="none"
          >
            Sync History
          </CustomButton>
          <CustomButton
            variant="contained"
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            width={'7vw'}
            height={'4vh'}
            textColor={Theme.palette.text.medium}
            borderRadius={'4px'}
            border={'1px solid' + Theme.palette.stroke[50]}
            shadow
            textTransform="none"
          >
            Sync History
          </CustomButton>
        </Stack>
      </Box>
      <CardMeta
        merchantValue={props.merchantRuleCount}
        categoryValue={props.categoryRuleCount}
        setOpenCategoryRuleModal={props.setOpenCategoryRuleModal}
      />
      <RampCardTable
        rows={props.transactionData}
        setResultLength={props.setResultLength}
      />
    </Stack>
    {props.openModal && <CreateRulePopup setFlag={props.setOpenModal} />}
    {props.openMerchantRuleModal && (
      <MerchantRuleModal
        merchantRuleCount={props.merchantRuleCount}
        setMerchantRuleCount={props.setMerchantRuleCount}
        open={props.openMerchantRuleModal}
        setOpen={props.setOpenMerchantRuleModal}
      />
    )}
    {props.openCategoryRuleModal && (
      <CategoryRuleModal
        open={props.openCategoryRuleModal}
        setOpen={props.setOpenCategoryRuleModal}
        categoruRulesCount={props.categoryRuleCount}
        setCategoryRulesCount={props.setCategoryRuleCount}
        categoriesData={props.categoriesData}
        categoryRulesData={props.categoryRuleData}
      />
    )}
  </Stack>
)

const AccountingPage = () => {
  const { setCategories } = useContext(CategoriesContext)
  const { createMerchantRule, setCreateMerchantRule } =
    useContext(MerchantRuleContext)

  const { createMerchantRuleModal, setCreateMerchantRuleModal } = useContext(
    MerchantRuleCreateContext
  )
  const { setMerchantRuleData } = useContext(MerchantRuleDataContext)
  const [openCategoryModal, setOpenCategoryModal] = useState(false)
  const [transactionsData, setTransactionsData] = useState([])
  const [categoriesData, setCategoriesData] = useState<any[]>([])
  const [merchantRuleCount, setMerchantRuleCount] = useState(0)
  const [categoryRuleCount, setCategoryRuleCount] = useState(0)
  const [categoryRuleData, setCategoryRuleData] = useState<any[]>([])

  const [resultLength, setResultLength] = useState(0)
  const { accountingLoader } = useContext(AccountingLoaderContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTransaction()
        setTransactionsData(response)
        setResultLength(response.length)
        const categories = await getCategories()
        setCategoriesData(categories)
        setCategories(categories)
        const merchantRules = await getMerchantRules()
        setMerchantRuleData(merchantRules)
        setMerchantRuleCount(merchantRules.length)
        const categoryRules = await getCategoryRules()
        setCategoryRuleCount(categoryRules.length)
        setCategoryRuleData(categoryRules)
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [accountingLoader])
  return (
    <HomeTemplate
      header={<Header />}
      main={
        <AccountingPageMain
          categoriesData={categoriesData}
          openModal={createMerchantRule}
          setOpenModal={setCreateMerchantRule}
          openMerchantRuleModal={createMerchantRuleModal}
          setOpenMerchantRuleModal={setCreateMerchantRuleModal}
          openCategoryRuleModal={openCategoryModal}
          setOpenCategoryRuleModal={setOpenCategoryModal}
          transactionData={transactionsData}
          merchantRuleCount={merchantRuleCount}
          setMerchantRuleCount={setMerchantRuleCount}
          categoryRuleCount={categoryRuleCount}
          setCategoryRuleCount={setCategoryRuleCount}
          categoryRuleData={categoryRuleData}
          setCategoryRuleData={setCategoryRuleData}
          setResultLength={setResultLength}
        />
      }
      footer={<Footer value={resultLength} />}
    />
  )
}

export default AccountingPage
