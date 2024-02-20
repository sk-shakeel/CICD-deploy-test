import React, { useState } from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import CategoryRuleModal from '.'
import {
  Categories,
  CategoryRuleHeading,
  categoryRules,
} from '../../../utils/constants'
import '@testing-library/jest-dom'

describe('CategoryRuleModal', () => {
  it('renders correctly', () => {
    const Test = () => {
      const [count, setCount] = useState(0)
      const [open, setOpen] = useState(true)
      return (
        <CategoryRuleModal
          categoruRulesCount={count}
          setCategoryRulesCount={setCount}
          categoriesData={Categories}
          categoryRulesData={categoryRules}
          open={open}
          setOpen={setOpen}
        />
      )
    }

    render(<Test />)
    const heading = screen.getByText(CategoryRuleHeading)
    expect(heading).toBeInTheDocument()

    expect(screen.getByText('Recent Categories')).toBeInTheDocument()
  })
  it('renders dropdown and create rule button', () => {
    const Test = () => {
      const [count, setCount] = useState(0)
      const [open, setOpen] = useState(true)
      return (
        <CategoryRuleModal
          categoruRulesCount={count}
          setCategoryRulesCount={setCount}
          categoriesData={Categories}
          categoryRulesData={categoryRules}
          open={open}
          setOpen={setOpen}
        />
      )
    }
    const { container } = render(<Test />)

    const div = screen.getByTestId('advertising')
    expect(div).toBeInTheDocument()

    const childDiv = div.querySelector('div') as HTMLElement
    expect(childDiv).toBeInTheDocument()

    const dropdown = childDiv.querySelector('div') as HTMLInputElement
    expect(dropdown).toBeInTheDocument()
    fireEvent.mouseDown(dropdown)

    expect(screen.getByRole('listbox')).toBeInTheDocument()
    act(() => {
      const options = screen.getAllByRole('option')
      fireEvent.click(options[1])
    })

    const create = screen.getByRole('button', { name: 'Create rule' })
    expect(create).toBeInTheDocument()
    fireEvent.click(create)
  })
})
