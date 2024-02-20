import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LabelPlusInput from '.'
import '@testing-library/jest-dom'

describe('LabelPlusInput component', () => {
  it('renders correctly with label and value', () => {
    const label = 'Test Label'
    const value = 'Test Value'
    const color = 'red'

    const { getByText, getByDisplayValue } = render(
      <LabelPlusInput label={label} value={value} color={color} />
    )

    expect(getByText(label)).toBeInTheDocument()

    const inputElement = getByDisplayValue(value)
    expect(inputElement).toBeInTheDocument()
  })
})
