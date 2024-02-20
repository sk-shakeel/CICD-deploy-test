import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '.'
import { NavButtons, NavLastButton } from '../../../utils/constants'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar component', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    NavButtons.forEach((button) => {
      expect(
        screen.getByRole('button', { name: button.name + ' nav button' })
      ).toBeInTheDocument()
    })

    expect(
      screen.getByRole('button', { name: NavLastButton + ' nav button' })
    ).toBeInTheDocument()
  })

  it('updates nav button state on click', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    const navButton = screen.getByRole('button', {
      name: 'Accounting nav button',
    })
    fireEvent.click(navButton)

    const navButton2 = screen.getByRole('button', {
      name: 'Bill pay nav button',
    })
    fireEvent.click(navButton2)
  })
})
