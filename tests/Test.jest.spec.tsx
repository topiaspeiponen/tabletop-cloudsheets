import React from 'react'
import { render,screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Test from "../src/components/Test"

describe('<Test />', () => {
  it('renders content', () => {
    render(<Test/>)
    const element = screen.getByText('Big testing unit')
    expect(element).toBeDefined()
  })
})