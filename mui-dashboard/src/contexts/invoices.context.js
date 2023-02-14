import { createContext, useEffect, useState } from "react";

const API_URL = 'http://localhost:3500/mockDataInvoices'

export const InvoicesContext = createContext({
    gridData: [],
    fetchError: null,
    isLoading: true
})


export const InvoicesProvider = ({ children }) => {

    const [gridData, setGridData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}?_sort=cost&_order=desc&_limit=10`)
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
        }, 1000)
    }, [])

    const value = { gridData, fetchError, isLoading }


    return <InvoicesContext.Provider value={value}>{children}</InvoicesContext.Provider>
}

