import React from 'react'
import { render } from '@testing-library/react'
import Footer from '.'
import { FooterResultText } from '../../../utils/constants'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

describe('Footer component', () => {
  it('renders correctly with given value', () => {
    const value = 42

    const { getByText } = render(<Footer value={value} />)

    expect(getByText(value.toString())).toBeInTheDocument()
    expect(getByText(FooterResultText)).toBeInTheDocument()
  })

  it('renders previous and next buttons', () => {
    const value = 42

    const { getByText } = render(<Footer value={value} />)

    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })
})
