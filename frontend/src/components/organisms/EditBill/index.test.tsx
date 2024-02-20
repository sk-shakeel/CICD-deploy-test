import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import EditBill from '.'

describe('EditBill', () => {
  const sampleProps = {
    amount: 1000,
    company: 'Example Company',
    payment: 'Credit Card',
    scheduledDate: '2023-09-04',
    arrivalDate: '2023-09-05',
  }

  it('renders EditBill component with provided props', () => {
    render(<EditBill {...sampleProps} />)

    expect(screen.getByText('Example Company')).toBeInTheDocument()
    expect(screen.getByText('$1000')).toBeInTheDocument()
  })
})
