import React, { useState } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import CreateRulePopup from '.'
import {
  CreateRulePopupButton,
  CreateRulePopupDescription,
  CreateRulePopupHeading,
} from '../../../utils/constants'

describe('CreateRulePopup component', () => {
  it('renders correctly', () => {
    const Test = () => {
      const [flag, setFlag] = useState(true)
      console.log(flag)
      return <CreateRulePopup setFlag={setFlag} />
    }
    render(<Test />)

    expect(screen.getByText(CreateRulePopupHeading)).toBeInTheDocument()

    const button = screen.getByRole('button', { name: CreateRulePopupButton })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
