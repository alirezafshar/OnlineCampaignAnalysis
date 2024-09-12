import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'

test('App', () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )

  expect(screen.getByText('OCA Inc.')).toBeDefined()
})
