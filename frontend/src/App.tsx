import { ThemeProvider } from '@mui/material'
import React, { createContext, useMemo, useState } from 'react'
import Theme from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AccountingPage from './pages/AccountingPage'
import PaymentsPage from './pages/PaymentsPage'
import NewBillPage from './pages/NewBillPage'
import { NavButton } from './components/organisms/Navbar/utils'
import { NavButtons } from './utils/constants'

export const CategoriesContext = createContext({
  categories: [],
  setCategories: (value: any) => {},
})

export const RampRuleContext = createContext({
  rampRule: {
    id: 0,
    label: '',
    merchantName: '',
  },
  setRampRule: (value: any) => {},
})

export const FormFilledContext = createContext({
  formFilled: true,
  setFormFilled: (value: any) => {},
})
export const MerchantRuleContext = createContext({
  createMerchantRule: true,
  setCreateMerchantRule: (value: any) => {},
})

export const MerchantRuleDataContext = createContext({
  merchantRuleData: [],
  setMerchantRuleData: (value: any) => {},
})

export const MerchantRuleCreateContext = createContext({
  createMerchantRuleModal: true,
  setCreateMerchantRuleModal: (value: any) => {},
})

export const PaymentsLoaderContext = createContext({
  paymentsLoader: false,
  setPaymentsLoader: (value: any) => {},
})
export const AccountingLoaderContext = createContext({
  accountingLoader: false,
  setAccountingLoader: (value: any) => {},
})

export const NavButtonContext = createContext({
  navButton: NavButtons,
  setNavButton: (value: any) => {},
})

const App = () => {
  const [navButton, setNavButton] = useState<NavButton[]>(NavButtons)

  const [categories, setCategories] = useState([])
  const [merchantRuleData, setMerchantRuleData] = useState([])
  const [createMerchantRule, setCreateMerchantRule] = useState(false)
  const [createMerchantRuleModal, setCreateMerchantRuleModal] = useState(false)
  const [paymentsLoader, setPaymentsLoader] = useState(false)
  const [accountingLoader, setAccountingLoader] = useState(false)
  const [formFilled, setFormFilled] = useState(true)
  const [rampRule, setRampRule] = useState({
    id: 0,
    label: '',
    merchantName: '',
  })

  const navMemo = useMemo(
    () => ({
      navButton,
      setNavButton,
    }),
    [navButton, setNavButton]
  )

  const formFilledMemo = useMemo(
    () => ({
      formFilled,
      setFormFilled,
    }),
    [formFilled, setFormFilled]
  )
  const merchantRule = useMemo(
    () => ({
      createMerchantRule,
      setCreateMerchantRule,
    }),
    [createMerchantRule, setCreateMerchantRule]
  )
  const rampMemo = useMemo(
    () => ({
      rampRule,
      setRampRule,
    }),
    [rampRule, setRampRule]
  )

  const categoriesMemo = useMemo(
    () => ({
      categories,
      setCategories,
    }),
    [categories, setCategories]
  )

  const merchantRuleMemo = useMemo(
    () => ({
      merchantRuleData,
      setMerchantRuleData,
    }),
    [merchantRuleData, setMerchantRuleData]
  )

  const merchantRuleModal = useMemo(
    () => ({
      createMerchantRuleModal,
      setCreateMerchantRuleModal,
    }),
    [createMerchantRuleModal, setCreateMerchantRuleModal]
  )

  const paymentMemo = useMemo(
    () => ({
      paymentsLoader,
      setPaymentsLoader,
    }),
    [paymentsLoader, setPaymentsLoader]
  )
  const accountingMemo = useMemo(
    () => ({
      accountingLoader,
      setAccountingLoader,
    }),
    [accountingLoader, setAccountingLoader]
  )
  return (
    <NavButtonContext.Provider value={navMemo}>
      <AccountingLoaderContext.Provider value={accountingMemo}>
        <MerchantRuleDataContext.Provider value={merchantRuleMemo}>
          <FormFilledContext.Provider value={formFilledMemo}>
            <CategoriesContext.Provider value={categoriesMemo}>
              <RampRuleContext.Provider value={rampMemo}>
                <PaymentsLoaderContext.Provider value={paymentMemo}>
                  <MerchantRuleContext.Provider value={merchantRule}>
                    <MerchantRuleCreateContext.Provider
                      value={merchantRuleModal}
                    >
                      <BrowserRouter>
                        <ThemeProvider theme={Theme}>
                          <Routes>
                            <Route
                              path="/accounting"
                              element={<AccountingPage />}
                            />
                            <Route
                              path="/payments"
                              element={<PaymentsPage />}
                            />
                            <Route path="/newBill" element={<NewBillPage />} />
                          </Routes>
                        </ThemeProvider>
                      </BrowserRouter>
                    </MerchantRuleCreateContext.Provider>
                  </MerchantRuleContext.Provider>
                </PaymentsLoaderContext.Provider>
              </RampRuleContext.Provider>
            </CategoriesContext.Provider>
          </FormFilledContext.Provider>
        </MerchantRuleDataContext.Provider>
      </AccountingLoaderContext.Provider>
    </NavButtonContext.Provider>
  )
}

export default App
