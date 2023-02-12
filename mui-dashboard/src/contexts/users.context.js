import { createContext, useState, useEffect } from 'react'


export const UsersContext = createContext({
    isLoading: true,
    setIsLoading: () => { },
    isCreateUserFormOpen: false,
    setIsCreateUserFormOpen: () => { },
    gridData: [],
    fetchError: null
})


export const UsersProvider = ({ children }) => {

    const API_URL = 'http://localhost:3500/mockDataTeam'

    const [gridData, setGridData] = useState([])
    const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}?_sort=name&_order=asc&_limit=10`)
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
        }, 2000)

    }, [])

    const value = { isLoading, fetchError, gridData, isCreateUserFormOpen, setIsCreateUserFormOpen, setIsLoading }

    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}