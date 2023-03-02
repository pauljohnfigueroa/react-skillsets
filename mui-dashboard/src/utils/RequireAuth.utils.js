import { useLocation, useNavigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth()

  return auth?.user?.role.find(role => allowedRoles?.includes(role))
}
export default RequireAuth
