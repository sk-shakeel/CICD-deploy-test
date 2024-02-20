import React from 'react'
import { render } from '@testing-library/react'
import HomeTemplate from '.'
import '@testing-library/jest-dom'

describe('HomeTemplate', () => {
  it('renders header, main, and footer', () => {
    const headerText = 'Header Content'
    const mainText = 'Main Content'
    const footerText = 'Footer Content'

    const { getByText } = render(
      <HomeTemplate
        header={<div>{headerText}</div>}
        main={<div>{mainText}</div>}
        footer={<div>{footerText}</div>}
      />
    )

    expect(getByText(headerText)).toBeInTheDocument()
    expect(getByText(mainText)).toBeInTheDocument()
    expect(getByText(footerText)).toBeInTheDocument()
  })

  it('renders without footer when not provided', () => {
    const headerText = 'Header Content'
    const mainText = 'Main Content'

    const { queryByText } = render(
      <HomeTemplate
        header={<div>{headerText}</div>}
        main={<div>{mainText}</div>}
      />
    )

    expect(queryByText(headerText)).toBeInTheDocument()
    expect(queryByText(mainText)).toBeInTheDocument()
    expect(queryByText('Footer Content')).not.toBeInTheDocument()
  })
})
