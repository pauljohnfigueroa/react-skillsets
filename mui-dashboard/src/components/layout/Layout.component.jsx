import { Outlet } from 'react-router-dom'
import SideBar from '../../scenes/global/Sidebar.component'
import Topbar from '../../scenes/global/Topbar.component'

const Layout = () => {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
