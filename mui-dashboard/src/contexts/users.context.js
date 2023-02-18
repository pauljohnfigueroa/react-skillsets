import { createContext, useState, useEffect } from 'react'

import apiRequest from '../api/apiRequest.api'

const API_URL = 'http://localhost:3500/mockDataUsers'

const initialValues = {
  id: null,
  name: '',
  email: '',
  age: 0,
  phone: '',
  access: ''
}

export const UsersContext = createContext({
  initFormValues: initialValues,
  isLoading: true,
  setIsLoading: () => {},
  isCreateUserFormOpen: false,
  setIsCreateUserFormOpen: () => {},
  gridData: [],
  setGridData: () => {},
  fetchError: null,
  setFetchError: () => {},
  pageSize: 5,
  setPageSize: () => {},
  handleSubmit: () => {},
  handleAddItem: () => {},
  handleUpdateItem: () => {},
  handleDeleteMultiple: () => {},
  showEditForm: () => {},
  checkedItemsIds: [],
  showCreateForm: () => {},
  formValues: [],
  setFormValues: () => {},
  API_URL: API_URL
})

export const UsersProvider = ({ children }) => {
  const [gridData, setGridData] = useState([])
  const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [pageSize, setPageSize] = useState(5)
  const [checkedItemsIds, setCheckedItemsIds] = useState([])
  const [initFormValues, setInitFormValues] = useState(initialValues)
  const [formValues, setFormValues] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}?_sort=name&_order=desc`)
        if (!response.ok) throw Error('Did not receive the expected data.')
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

  const handleAddItem = async values => {
    const response = await fetch(API_URL)
    const data = await response.json()
    const id = data.length ? data[data.length - 1].id + 1 : 1
    const newItem = { ...values, id }
    const listItems = [...data, newItem]
    // update the front-end
    setGridData(listItems)

    // Insert record in the backend
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  }

  const handleUpdateItem = async () => {
    console.log('handleUpdateItem', formValues)
    const updatedItem = { ...formValues }
    const listItems = [...gridData, updatedItem]

    // update the front-end
    setGridData(listItems)

    // update the backend
    const item = gridData.filter(row => row.id === formValues.id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...item[0], ...formValues })
    }

    const result = await apiRequest(`${API_URL}/${formValues.id}`, updateOptions)
    if (result) setFetchError(result)
  }

  const handleDeleteMultiple = () => {
    const items = gridData.filter(item => !checkedItemsIds.includes(item.id))
    // remove the item/s from the front-end
    setGridData(items)
    //console.log(checkedItemsIds)
    // delete items from the backend
    const deleteOptions = { method: 'DELETE' }
    const result = checkedItemsIds.map(async id => {
      const results = await apiRequest(`${API_URL}/${id}`, deleteOptions)
      if (results) setFetchError(results)
    })
  }

  const showEditForm = row => {
    setInitFormValues(row)
    setIsCreateUserFormOpen(true)
  }

  const showCreateForm = () => {
    setInitFormValues(initialValues)
    setIsCreateUserFormOpen(true)
  }

  const value = {
    initialValues,
    initFormValues,
    setInitFormValues,
    isLoading,
    fetchError,
    gridData,
    isCreateUserFormOpen,
    setIsCreateUserFormOpen,
    pageSize,
    setPageSize,
    setFetchError,
    setGridData,
    handleAddItem,
    handleUpdateItem,
    handleDeleteMultiple,
    showEditForm,
    setCheckedItemsIds,
    showCreateForm,
    formValues,
    setFormValues,
    API_URL
  }

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
