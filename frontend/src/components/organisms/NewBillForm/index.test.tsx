import React, { useMemo, useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NewBillForm from '.'
import '@testing-library/jest-dom'
import { paymentType, paymentTypeValues } from '../../../utils/constants'
import { FormFilledContext } from '../../../App'

describe('NewBillForm component', () => {
  it('renders Input Fields', () => {
    const Test = () => {
      const [billDetails, setBillDetails] =
        useState<paymentType>(paymentTypeValues)
      const [formFilled, setFormFilled] = useState(true)

      const formFilledMemo = useMemo(
        () => ({
          formFilled,
          setFormFilled,
        }),
        [formFilled, setFormFilled]
      )

      return (
        <FormFilledContext.Provider value={formFilledMemo}>
          <NewBillForm
            billDetails={billDetails}
            setBillDetails={setBillDetails}
          />
        </FormFilledContext.Provider>
      )
    }
    const { container } = render(<Test />)

    const vendorInput = container.querySelector('#vendor') as HTMLInputElement
    expect(vendorInput).toBeInTheDocument()
    fireEvent.change(vendorInput, { target: { value: 'shaik@gmail.com' } })
    expect(vendorInput).toHaveValue('shaik@gmail.com')

    const invoiceInput = container.querySelector('#invoice') as HTMLInputElement
    expect(invoiceInput).toBeInTheDocument()
    fireEvent.change(invoiceInput, { target: { value: '12345' } })
    expect(invoiceInput).toHaveValue('12345')

    const invoiceDate = container.querySelector(
      '#invocie-date'
    ) as HTMLInputElement
    expect(invoiceDate).toBeInTheDocument()
    fireEvent.change(invoiceDate, { target: { value: '1' } })
    fireEvent.change(invoiceDate, { target: { value: '' } })
    fireEvent.change(invoiceDate, { target: { value: '123' } })
    fireEvent.change(invoiceDate, { target: { value: '12/09' } })
    fireEvent.change(invoiceDate, { target: { value: '12/' } })

    const location = container.querySelector('#location') as HTMLInputElement
    expect(location).toBeInTheDocument()
    fireEvent.change(location, { target: { value: 'abc' } })
    expect(location).toHaveValue('abc')

    const memo = container.querySelector('#memo') as HTMLInputElement
    expect(memo).toBeInTheDocument()
    fireEvent.change(memo, { target: { value: 'abc' } })
    expect(memo).toHaveValue('abc')

    const amount = container.querySelector('#amount') as HTMLInputElement
    expect(amount).toBeInTheDocument()
    fireEvent.change(amount, { target: { value: '123' } })
    expect(amount).toHaveValue('123')

    const description = container.querySelector('#desc') as HTMLInputElement
    expect(description).toBeInTheDocument()
    fireEvent.change(description, { target: { value: 'abc' } })
    expect(description).toHaveValue('abc')

    const cat = container.querySelector('#cat') as HTMLInputElement
    expect(cat).toBeInTheDocument()
    fireEvent.mouseDown(cat)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    const options = screen.getAllByRole('option')
    expect(options[0]).toBeInTheDocument()
    fireEvent.click(options[0])

    const classType = container.querySelector('#class') as HTMLInputElement
    expect(classType).toBeInTheDocument()
    fireEvent.mouseDown(classType)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    const options1 = screen.getAllByRole('option')
    expect(options1[0]).toBeInTheDocument()
    fireEvent.click(options1[0])

    const job = container.querySelector('#job') as HTMLInputElement
    expect(job).toBeInTheDocument()
    fireEvent.mouseDown(job)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    const options2 = screen.getAllByRole('option')
    expect(options2[0]).toBeInTheDocument()
    fireEvent.click(options2[0])

    const payment = container.querySelector('#payment') as HTMLInputElement
    expect(payment).toBeInTheDocument()
    fireEvent.mouseDown(payment)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    const options3 = screen.getAllByRole('option')
    expect(options3[0]).toBeInTheDocument()
    fireEvent.click(options3[0])

    const addButton = screen.getByTestId('add')
    expect(addButton).toBeInTheDocument()
    fireEvent.click(addButton)
    const deleteButton = screen.getAllByTestId('delete')
    expect(deleteButton[0]).toBeInTheDocument()
    fireEvent.click(deleteButton[0])
  })
})
