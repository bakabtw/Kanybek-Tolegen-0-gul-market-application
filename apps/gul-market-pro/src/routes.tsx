import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import {
  ChooseRolePage,
  AuthorizationPage,
  IndividualPage,
  EntityPage,
  LoginPage,
  RememberPasswordPage,
  NewPasswordPage
} from './pages'
// CreateBrowserRouter поменяем как сервак будет
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/choose-role',
    element: <ChooseRolePage />
  },
  {
    path: '/individual',
    element: <IndividualPage />
  },
  {
    path: '/entity',
    element: <EntityPage />
  },
  {
    path: '/remember-password',
    element: <RememberPasswordPage />
  },
  {
    path: '/new-password',
    element: <NewPasswordPage />
  }
])