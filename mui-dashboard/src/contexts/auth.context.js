import { createContext, useState } from 'react'

const initialFormValues = {
  email: '',
  password: ''
}

export const AuthContext = createContext({
  userData: [],
  setUserData: () => {}
})

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialFormValues)
  const value = { userData, setUserData, initialFormValues }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
