import { createContext, useState, useEffect } from 'react'

const API_URL = 'http://localhost:3500/mockDataUsers'

export const UsersContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
  isCreateUserFormOpen: false,
  setIsCreateUserFormOpen: () => {},
  gridData: [],
  fetchError: null,
  pageSize: 5,
  setPageSize: () => {},
  setFetchError: () => {},
  handleSubmit: () => {},
  API_URL: ''
})

export const UsersProvider = ({ children }) => {
  const [gridData, setGridData] = useState([])
  const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [pageSize, setPageSize] = useState(5)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}?_sort=name&_order=desc`)
        if (!response.ok) throw Error('Did not receive expected data.')
        const listItems = await response.json()
        setGridData(listItems)
        setFetchError(null)
      } catch (err) {
        console.log(err.message)
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    setTimeout(() => {
      fetchItems()
    }, 1000)
  }, [])

  const handleSubmit = () => {
    console.log('New User Form Submitted')
  }

  const value = {
    isLoading,
    fetchError,
    gridData,
    isCreateUserFormOpen,
    setIsCreateUserFormOpen,
    pageSize,
    setPageSize,
    setFetchError,
    setGridData,
    handleSubmit,
    API_URL
  }

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
