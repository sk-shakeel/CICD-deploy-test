import React from 'react'
import { render, screen } from '@testing-library/react'
import PaymentTable from '.'
import '@testing-library/jest-dom'
import { PaymentTableRows } from '../../../utils/constants'

describe('PaymentTable Component', () => {
  it('renders without errors', () => {
    render(<PaymentTable rows={PaymentTableRows} />)
    const searchInput = screen.getByPlaceholderText('Search Cards')
    const downloadButton = screen.getByText('Download')

    expect(searchInput).toBeInTheDocument()
    expect(downloadButton).toBeInTheDocument()
  })
})
