import React, { useMemo, useState } from 'react'
import PaymentsPage from '.'
import { BrowserRouter } from 'react-router-dom'
import { PaymentsLoaderContext } from '../../App'
import { fireEvent, render } from '@testing-library/react'
import axios from 'axios'
import '@testing-library/jest-dom'
import { when } from 'jest-when'
import { ApiBase, PaymentTableRows } from '../../utils/constants'
import { screen } from '@testing-library/react'

jest.mock('axios')
const axiosSpy = jest.spyOn(axios, 'get')

describe('Payments Page', () => {
  it('renders Payment Table ', () => {
    when(axiosSpy)
      .calledWith(ApiBase + 'payments')
      .mockResolvedValue({ data: PaymentTableRows })

    const Test = () => {
      const [paymentsLoader, setPaymentsLoader] = useState(false)

      const paymentMemo = useMemo(
        () => ({
          paymentsLoader,
          setPaymentsLoader,
        }),
        [paymentsLoader, setPaymentsLoader]
      )
      return (
        <PaymentsLoaderContext.Provider value={paymentMemo}>
          <BrowserRouter>
            <PaymentsPage />
          </BrowserRouter>
        </PaymentsLoaderContext.Provider>
      )
    }

    render(<Test />)
    const button = screen.getByRole('button', { name: 'New Bill' })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
