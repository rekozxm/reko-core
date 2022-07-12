import { Button } from 'antd'
import { Outlet } from 'react-router-dom'
const ContentDom = () => {
  return (
    <div>
      manage-home
      <Button>按钮</Button>
      <Outlet></Outlet>
    </div>
  )
}

export default ContentDom
