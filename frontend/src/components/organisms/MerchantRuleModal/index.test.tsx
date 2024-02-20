import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MerchantRuleModal from '.'
import { MerchantRuleModalHeading } from '../../../utils/constants'

describe('MerchantRuleModal', () => {
  it('renders correctly', () => {
    const mockSetMerchantRuleCount = jest.fn()
    const Test = () => {
      const [open, setOpen] = useState(true)

      return (
        <MerchantRuleModal
          merchantRuleCount={0}
          setMerchantRuleCount={mockSetMerchantRuleCount}
          open={open}
          setOpen={setOpen}
        />
      )
    }
    render(<Test />)

    expect(screen.getByText(MerchantRuleModalHeading)).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Create rule' })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
