import { RouteObject } from 'react-router-dom'
import ManageHome from '@layout/manage/home'
import SelfHome from '@layout/self/home'

const route: RouteObject[] = [
  {
    path: '/',
    element: <ManageHome />
  },
  {
    path: '/manage',
    element: <ManageHome />
  },
  {
    path: '/self',
    element: <SelfHome />
  }
]
export default route
