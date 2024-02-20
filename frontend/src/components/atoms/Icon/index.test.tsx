import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Icon from '.'

describe('Image', () => {
  test('renders image with provided id', () => {
    render(<Icon src="" alt="Test Image" id="test-image" />)
    const imageElement = screen.getByAltText('Test Image')
    expect(imageElement).toBeInTheDocument
  })
})
