import { useState } from 'react'
import { BrowserRouter, useRoutes, RouteObject } from 'react-router-dom'
import routers from '@router'

const LayoutDom = () => {
  const GetRoutes = () => useRoutes(routers)
  return (
    <BrowserRouter>
      <GetRoutes></GetRoutes>
    </BrowserRouter>
  )
}

export default LayoutDom
