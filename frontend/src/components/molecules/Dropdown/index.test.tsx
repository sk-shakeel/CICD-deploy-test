import '@testing-library/jest-dom'
import React, { useState } from 'react'
import Dropdown from '.'
import { act, fireEvent, render, screen } from '@testing-library/react'

describe('Dropdown component', () => {
  it('renders input', () => {
    const Verify = () => {
      const [value, setValue] = useState('')
      return (
        <Dropdown
          fields={['a', 'b', 'c', 'd']}
          placeholder="abc"
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }) => {
            setValue(e.target.value)
          }}
          value={value}
          id="dropdown"
        />
      )
    }

    const { container } = render(<Verify />)

    let input = container.querySelector('#dropdown') as HTMLInputElement
    expect(input).toBeInTheDocument()
    fireEvent.mouseDown(input)
    expect(screen.getByRole('listbox')).not.toEqual(null)
    act(() => {
      const options = screen.getAllByRole('option')
      fireEvent.mouseDown(options[1])
    })
    act(() => {
      const options = screen.getAllByRole('option')
      fireEvent.click(options[1])
    })
  })
})
