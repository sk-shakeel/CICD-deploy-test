import { render, screen } from '@testing-library/react'
import React from 'react'
import { InputField } from '.'
import '@testing-library/jest-dom'

describe('InputField', () => {
  it('should render correctly', () => {
    render(<InputField label="Username" value={'abc'} />)

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('should display the start and end icons', () => {
    const startIcon = <span data-testid="start-icon">🔍</span>
    const endIcon = <span data-testid="end-icon">✉️</span>
    render(
      <InputField label="Username" starticon={startIcon} endicon={endIcon} />
    )

    const startIconElement = screen.getByTestId('start-icon')
    const endIconElement = screen.getByTestId('end-icon')

    expect(startIconElement).toBeInTheDocument()
    expect(endIconElement).toBeInTheDocument()
  })
})
