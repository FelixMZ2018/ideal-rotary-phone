import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router' // https://reacttraining.com/react-router/web/api/MemoryRouter

import Main from 'components/main/Main'

describe('Main.jsx', () => {

  const renderMain = () => (
    render(
      <MemoryRouter>
        <Main dispatch={jest.fn()} />
      </MemoryRouter>
    )
  )

  const SIDEBARITEMS = [
    'Profile',
    'Devices',
    'Notifications',
    'Changelog',
    'Break it!',
    'Logout',
    
  ]

  describe('the sidebar items', () => {
    test('are all found', async () => {
      const { getByText } = renderMain()

      SIDEBARITEMS.forEach(getByText)
    })
  })

  describe('Error Handling',() => {
    test('it does show the error page', async () => {
      const { getByText } = renderMain()
      const button = getByText('Break it!')
      fireEvent.click(button)
      getByText('We are sorry this happened but rest assured we are working on fixing it')
    })
  })

})

