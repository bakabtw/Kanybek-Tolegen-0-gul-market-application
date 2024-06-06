import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import {
  ChooseRolePage,
  AuthorizationPage,
  IndividualPage,
  EntityPage,
  LoginPage,
  RememberPasswordPage,
  NewPasswordPage,
  FlowersPage
} from './pages'
import { MainPage } from './pages/main-page'
import Main from './pages/entity-page/Forms/Shop/parts/Main/Main'
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
    path: '/main-page',
    element: <MainPage />
  },
  {
    path: 'flowers',
    element: <FlowersPage />
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
