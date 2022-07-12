import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import Layout from '@frame/layout'
import '@styles/index.less'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider componentSize="small">
      <Layout />
    </ConfigProvider>
  </React.StrictMode>
)
