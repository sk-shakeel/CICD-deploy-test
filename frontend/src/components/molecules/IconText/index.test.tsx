import React from 'react'
import { render } from '@testing-library/react'
import IconText from '.'
import { AllCardIconAlt, AllCards } from '../../../utils/constants'

test('renders IconText component', () => {
  const { getByAltText, getByText } = render(<IconText />)

  const icon = getByAltText(AllCardIconAlt)
  expect(icon).toBeInTheDocument()

  const text = getByText(AllCards)
  expect(text).toBeInTheDocument()
})
