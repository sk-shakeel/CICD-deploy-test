import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)

    const setupButton = screen.getByRole('button')
    expect(setupButton).toBeInTheDocument()

    const userIcon = screen.getByAltText('user')
    expect(userIcon).toBeInTheDocument()
  })
})
