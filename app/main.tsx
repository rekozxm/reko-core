import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import Layout from '@frame/layout'
import '@styles/index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider componentSize='small'>
      <Layout />
    </ConfigProvider>
  </React.StrictMode>
)
