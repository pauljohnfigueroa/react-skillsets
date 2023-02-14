import { createContext, useEffect, useState } from "react";

export const InvoicesContext = createContext({
    gridData: [],
    fetchError: null,
    isLoading: true,
    pageSize: 5,
    setPageSize: () => { }
})

export const InvoicesProvider = ({ children }) => {

    const API_URL = 'http://localhost:3500/mockDataInvoices'

    const [gridData, setGridData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [pageSize, setPageSize] = useState(5)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}?_sort=cost&_order=desc&`)
                if (!response.ok) throw Error('Did not receive the expected data.')
                const listItems = await response.json()
                setGridData(listItems)
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        setTimeout(() => {
            fetchItems()
        }, 5000)
    }, [])

    const value = { gridData, fetchError, isLoading, pageSize, setPageSize }


    return <InvoicesContext.Provider value={value}>{children}</InvoicesContext.Provider>
}

