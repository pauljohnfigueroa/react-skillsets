import { createContext, useState, useEffect } from 'react'

const API_URL = 'http://localhost:3500/scenePermissions'

export const ScenesContext = createContext({
  allowedRoles: []
})

export const ScenesProvider = ({ children }) => {
  const [allowedRoles, setAllowedRoles] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive the expected data.')
        const items = await response.json()
        setAllowedRoles(items)
        console.log('allowedRoles in useEffect', allowedRoles)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchItems()
  }, [])

  const value = { allowedRoles }

  return <ScenesContext.Provider value={value}>{children}</ScenesContext.Provider>
}
