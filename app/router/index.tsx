import { useRoutes, RouteObject } from 'react-router-dom'
import ManageHome from '@view/manage/home'
import ManageChild from '@view/manage/child'
import SelfHome from '@view/self/home'
import WorkbenchHome from '@view/workbench/home'

const route: RouteObject[] = [
  {
    path: '/',
    element: <ManageHome />,
  },
  {
    path: '/manage',
    element: <ManageHome />,
    children: [
      {
        path: 'home',
        element: <ManageChild />,
      }
    ]

  },
  {
    path: '/self',
    element: <SelfHome />,
  },
  {
    path: '/workbench',
    element: <WorkbenchHome />,
  }
]
export default route