import React, { useMemo, useState } from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import RampCardTable from '.'
import '@testing-library/jest-dom'
import { RampCardTableRows } from '../../../utils/constants'
import { CategoriesContext, RampRuleContext } from '../../../App'
import { DropdownCell } from './helperComponents'

describe('RampCardTable Component', () => {
  it('renders without errors', () => {
    const { container } = render(<RampCardTable rows={RampCardTableRows} />)
    expect(container).toBeInTheDocument()
  })

  it('displays search suggestions when the search input is clicked', () => {
    const Test = () => {
      const [result, setResult] = useState(0)
      const [categories, setCategories] = useState([])
      const [rampRule, setRampRule] = useState({
        id: 0,
        label: '',
        merchantName: '',
      })
      const rampMemo = useMemo(
        () => ({
          rampRule,
          setRampRule,
        }),
        [rampRule, setRampRule]
      )

      const categoriesMemo = useMemo(
        () => ({
          categories,
          setCategories,
        }),
        [categories, setCategories]
      )
      return (
        <CategoriesContext.Provider value={categoriesMemo}>
          <RampRuleContext.Provider value={rampMemo}>
            <RampCardTable
              rows={RampCardTableRows}
              setResultLength={setResult}
            />
          </RampRuleContext.Provider>
        </CategoriesContext.Provider>
      )
    }
    const { container } = render(<Test />)
    const searchInput = container.querySelector('#search') as HTMLInputElement
    fireEvent.change(searchInput, { target: { value: 'lyf' } })

    fireEvent.change(searchInput, { target: { value: 'Lyft' } })

    const suggestionElements = screen.getAllByText('Lyft')
    suggestionElements.forEach((suggestion) => {
      expect(suggestion).toBeInTheDocument()
      fireEvent.click(suggestion)
    })

    const selectQuickBook = container.querySelector(
      '#selectQuickBook'
    ) as HTMLSelectElement

    expect(selectQuickBook).toBeInTheDocument()
    fireEvent.mouseDown(selectQuickBook)
  })
})
