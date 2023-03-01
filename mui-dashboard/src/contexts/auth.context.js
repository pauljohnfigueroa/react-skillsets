import { createContext, useState } from 'react'

const initialFormValues = {
  email: '',
  password: ''
}

export const AuthContext = createContext({
  auth: {},
  userData: [],
  setUserData: () => {}
})

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialFormValues)
  const [auth, setAuth] = useState({})

  const value = { auth, setAuth, userData, setUserData, initialFormValues }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
