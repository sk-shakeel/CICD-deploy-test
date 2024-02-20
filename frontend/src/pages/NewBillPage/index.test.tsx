import { fireEvent, render } from '@testing-library/react'
import React, { useMemo, useState } from 'react'
import NewBillPage from '.'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { FormFilledContext, PaymentsLoaderContext } from '../../App'
import { screen } from '@testing-library/react'
describe('NewBill Page', () => {
  it('renders new bill page', () => {
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
            <NewBillPage />
          </BrowserRouter>
        </PaymentsLoaderContext.Provider>
      )
    }
    render(<Test />)
    const back = screen.getByTestId('back')
    expect(back).toBeInTheDocument()
    fireEvent.click(back)
  })
  it('renders new bill page', () => {
    const Test = () => {
      const [paymentsLoader, setPaymentsLoader] = useState(false)
      const [formFilled, setFormFilled] = useState(true)

      const formFilledMemo = useMemo(
        () => ({
          formFilled,
          setFormFilled,
        }),
        [formFilled, setFormFilled]
      )

      const paymentMemo = useMemo(
        () => ({
          paymentsLoader,
          setPaymentsLoader,
        }),
        [paymentsLoader, setPaymentsLoader]
      )

      return (
        <FormFilledContext.Provider value={formFilledMemo}>
          <PaymentsLoaderContext.Provider value={paymentMemo}>
            <BrowserRouter>
              <NewBillPage />
            </BrowserRouter>
          </PaymentsLoaderContext.Provider>
        </FormFilledContext.Provider>
      )
    }

    const { container } = render(<Test />)

    const skip = screen.getByRole('button', { name: 'Skip Prefilling' })
    expect(skip).toBeInTheDocument()
    fireEvent.click(skip)

    const vendorInput = container.querySelector('#vendor') as HTMLInputElement
    expect(vendorInput).toBeInTheDocument()
    fireEvent.change(vendorInput, { target: { value: 'shaik@gmail.com' } })

    const invoiceInput = container.querySelector('#invoice') as HTMLInputElement
    expect(invoiceInput).toBeInTheDocument()
    fireEvent.change(invoiceInput, { target: { value: '12345' } })
    const invoiceDate = container.querySelector(
      '#invocie-date'
    ) as HTMLInputElement
    expect(invoiceDate).toBeInTheDocument()
    fireEvent.change(invoiceDate, { target: { value: '11/01/23' } })

    const location = container.querySelector('#location') as HTMLInputElement
    expect(location).toBeInTheDocument()
    fireEvent.change(location, { target: { value: 'abc' } })

    const amount = container.querySelector('#amount') as HTMLInputElement
    expect(amount).toBeInTheDocument()
    fireEvent.change(amount, { target: { value: '123' } })

    const paymentType = container.querySelector('#payment') as HTMLInputElement
    expect(paymentType).toBeInTheDocument()
    fireEvent.mouseDown(paymentType)
    const options = screen.getAllByRole('option')
    expect(options[0]).toBeInTheDocument()
    fireEvent.click(options[0])
    const parentReview = screen.getByTestId('parent-review')

    const reviewStack = parentReview.children[2]
    expect(reviewStack).toBeInTheDocument()

    const reviewButton = reviewStack.children[1]
    expect(reviewButton).toBeInTheDocument()
    fireEvent.click(reviewButton)

    const confirmButton = screen.getByRole('button', { name: 'Create bill' })
    expect(confirmButton).toBeInTheDocument()
    fireEvent.click(confirmButton)
  })
})
