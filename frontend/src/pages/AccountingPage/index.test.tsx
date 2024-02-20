import { render } from '@testing-library/react'
import React, { useMemo, useState } from 'react'
import AccountingPage from '.'
import '@testing-library/jest-dom'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import {
  ApiBase,
  Categories,
  categoryRules,
  merchantRules,
} from '../../utils/constants'
import { MerchantRuleContext, MerchantRuleCreateContext } from '../../App'
import { when } from 'jest-when'

jest.mock('axios')
const axiosSpy = jest.spyOn(axios, 'get')

describe('Renders Accounting Page', () => {
  const transactions = [
    {
      id: 1,
      merchantName: 'Lyft',
      meta: {
        brand: 'H&M',
        name: 'casio',
      },
      amount: 42000,
      date: 'Apr 14, 2004',
      user: {
        name: 'Hellena John',
        virtualId: 'Virtual 7007',
      },
      reciept: '#200257',
      memo: '21-00006',
      sync: 'Make ready',
    },
    {
      id: 2,
      merchantName: 'Lyft',
      meta: {
        brand: 'Renuar',
        name: 'arscris',
      },
      amount: 42000,
      date: 'Sep 10, 2010',
      user: {
        name: 'Afolabi David',
        virtualId: 'Virtual 7007',
      },
      reciept: '#526534',
      memo: '21-00004',
      sync: 'Make ready',
    },
    {
      id: 3,
      merchantName: 'Lyft',
      meta: {
        brand: 'Zara',
        name: 'deniel_we',
      },
      amount: 37000,
      date: 'Aug 28, 2004',
      user: {
        name: 'David Oshodi',
        virtualId: 'Virtual 7007',
      },
      reciept: '#526520',
      memo: '21-00010',
      sync: 'Make ready',
    },
    {
      id: 4,
      merchantName: 'Lyft',
      meta: {
        brand: 'Bershka',
        name: 'shop123',
      },
      amount: 21000,
      date: 'Aug 07, 2019',
      user: {
        name: 'Adekunle Fisayo',
        virtualId: 'Virtual 7007',
      },
      reciept: '#526589',
      memo: '21-00005',
      sync: 'Make ready',
    },
    {
      id: 5,
      merchantName: 'Lyft',
      meta: {
        brand: 'Stradivarius',
        name: 'demode',
      },
      amount: 17000,
      date: 'May 16, 2005',
      user: {
        name: 'Mbah Jacob',
        virtualId: 'Virtual 7007',
      },
      reciept: '#526587',
      memo: '21-00007',
      sync: 'Make ready',
    },
    {
      id: 6,
      merchantName: 'Lyft',
      meta: {
        brand: 'American Eagle',
        name: 'shopsieu',
      },
      amount: 12000,
      date: 'Aug 27, 2019',
      user: {
        name: 'James Friday',
        virtualId: 'Virtual 7007',
      },
      reciept: '#105986',
      memo: '20-00400',
      sync: 'Make ready',
    },
    {
      id: 7,
      merchantName: 'Capone',
      meta: {
        brand: 'Cooper Stop',
        name: 'shoplin',
      },
      amount: 15000,
      date: 'Aug 27, 2019',
      user: {
        name: 'John Snow',
        virtualId: 'Virtual 7007',
      },
      reciept: '#105086',
      memo: '20-01400',
      sync: 'Make ready',
    },
  ]
  test('Renders Accounting Page', async () => {
    when(axiosSpy)
      .calledWith(ApiBase + 'transactions')
      .mockResolvedValue({ data: transactions })

    when(axiosSpy)
      .calledWith(ApiBase + 'categories')
      .mockResolvedValue({ data: Categories })

    when(axiosSpy)
      .calledWith(ApiBase + 'merchantRules')
      .mockResolvedValue({ data: merchantRules })

    when(axiosSpy)
      .calledWith(ApiBase + 'categoryRules')
      .mockResolvedValue({ data: categoryRules })

    const Test = () => {
      const [createMerchantRule, setCreateMerchantRule] = useState(false)
      const [createMerchantRuleModal, setCreateMerchantRuleModal] =
        useState(false)

      const merchantRule = useMemo(
        () => ({
          createMerchantRule,
          setCreateMerchantRule,
        }),
        [createMerchantRule, setCreateMerchantRule]
      )

      const merchantRuleModal = useMemo(
        () => ({
          createMerchantRuleModal,
          setCreateMerchantRuleModal,
        }),
        [createMerchantRuleModal, setCreateMerchantRuleModal]
      )
      return (
        <MerchantRuleContext.Provider value={merchantRule}>
          <MerchantRuleCreateContext.Provider value={merchantRuleModal}>
            <BrowserRouter>
              <AccountingPage />
            </BrowserRouter>
          </MerchantRuleCreateContext.Provider>
        </MerchantRuleContext.Provider>
      )
    }

    render(<Test />)
  })
})
