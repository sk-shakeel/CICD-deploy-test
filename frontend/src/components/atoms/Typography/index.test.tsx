import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import TypographyComponent, { TypographyProps } from '.'
import Theme from '../../../theme'

describe('TypographyComponent', () => {
  const defaultProps: TypographyProps = {
    variant: 'h1',
    children: 'Hello, world!',
    color: Theme.palette.primary[500],
  }

  it('renders with the correct variant and children', () => {
    render(<TypographyComponent {...defaultProps} />)
    const typographyElement = screen.getByText('Hello, world!')
    expect(typographyElement).toBeInTheDocument()
    expect(typographyElement).toHaveClass('MuiTypography-h1')
  })
})
