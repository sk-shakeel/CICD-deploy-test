import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardMeta from '.'

describe('CardMeta component', () => {
  it('renders correctly with given props', () => {
    const merchantValue = 123
    const categoryValue = 456

    const { getByText } = render(
      <CardMeta
        merchantValue={merchantValue}
        categoryValue={categoryValue}
        setOpenCategoryRuleModal={() => {
          return false
        }}
      />
    )

    const click = getByText('Category rules')
    expect(getByText('Category rules')).toBeInTheDocument()
    fireEvent.click(click)
    expect(getByText('Missing items')).toBeInTheDocument()
    expect(getByText('Merchant rules')).toBeInTheDocument()

    expect(getByText('79')).toBeInTheDocument()
    expect(getByText(merchantValue.toString())).toBeInTheDocument()
    expect(getByText(categoryValue.toString())).toBeInTheDocument()
  })
})
