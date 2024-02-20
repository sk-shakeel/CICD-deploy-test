import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SkipBanner from '.'
import {
  SaveBannerButton,
  SaveBannerDescription,
  SaveBannerTitle,
} from '../../../utils/constants'
import '@testing-library/jest-dom'

describe('SkipBanner', () => {
  it('renders correctly', () => {
    render(<SkipBanner />)

    const titleElement = screen.getByText(SaveBannerTitle)
    const descriptionElement = screen.getByText(SaveBannerDescription)
    const buttonElement = screen.getByText(SaveBannerButton)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  it('closes the modal when the button is clicked', () => {
    render(<SkipBanner />)

    const buttonElement = screen.getByText(SaveBannerButton)

    fireEvent.click(buttonElement)

    const modalElement = screen.queryByRole('dialog')

    expect(modalElement).not.toBeInTheDocument()
  })
})
