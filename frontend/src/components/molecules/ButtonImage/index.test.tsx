import React from 'react'
import { render } from '@testing-library/react'
import ButtonImage from '.'
import { ReviewButton } from '../../../utils/constants'
import '@testing-library/jest-dom'

describe('ButtonImage component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<ButtonImage />)

    expect(getByText(ReviewButton)).toBeInTheDocument()

    const spreadIcon = getByAltText('spread')
    expect(spreadIcon).toBeInTheDocument()
  })
})
