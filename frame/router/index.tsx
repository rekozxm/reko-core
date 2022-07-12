import { RouteObject } from 'react-router-dom'
import LoginWrap from '@layout/login'
import WebWrap from '@layout/web'

const route: RouteObject[] = [
  {
    path: '/',
    element: <LoginWrap />
  },
  {
    path: '/login',
    element: <LoginWrap />
  },
  {
    path: '/web',
    element: <WebWrap />
  }
]
export default route
