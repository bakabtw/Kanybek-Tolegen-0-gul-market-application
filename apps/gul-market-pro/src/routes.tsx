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
  FlowersPage,
  BasketPage,
  MyOrdersPage
} from './pages'
import { MainPage } from './pages/main-page'
import { CatalogPage } from './pages/catalog-page'

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
    path: '/flowers',
    element: <FlowersPage />
  },
  {
    path: '/catalog',
    element: <CatalogPage />
  },
  {
    path: '/remember-password',
    element: <RememberPasswordPage />
  },
  {
    path: '/new-password',
    element: <NewPasswordPage />
  },
  {
    path: '/basket',
    element: <BasketPage />
  },
  {
    path: '/my-orders',
    element: <MyOrdersPage />
  }
])
