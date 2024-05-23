import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './providers/routes'
import LayoutNonAuth from './pageComponents/Layouts/LayoutNonAuth'

export function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}
