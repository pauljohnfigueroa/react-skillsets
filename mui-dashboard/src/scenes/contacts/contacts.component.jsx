import { useEffect, useState } from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import { tokens } from '../../theme'
// import { mockDataContacts } from '../../data/mockData'

import Header from '../../components/header/header.component'

const API_URL = 'http://localhost:3500/mockDataContacts'

const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [gridData, setGridData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const CustomNoRowsOverlay = () => {
    return fetchError ? <Box sx={{ mt: 1 }}>{fetchError}</Box> : <Box sx={{ mt: 1 }}>No Data.</Box>
  }

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
    }, 5000)
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID'
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell'
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left'
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1
    },
    {
      field: 'zipCode',
      headerName: 'ZIP Code',
      flex: 1
    }
  ]

  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="It is who you know, and not what you know. " />
      <Box
        m="40px 0 0 0"
        height="100vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          // '& .MuiDataGrid-cell': {
          //     borderBottom: 'none'
          // },
          '& .name-column--cell': {
            color: colors.greenAccent[400]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.primary[400],
            borderBottom: 'none'
          },
          // '& .MuiDataGrid-virtualScroller': {
          //     backgroundColor: colors.primary[500],
          //     zIndex: -1
          // },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.primary[400]
          }
        }}
      >
        <DataGrid
          components={{
            Toolbar: GridToolbar,
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay
          }}
          loading={isLoading}
          rows={gridData}
          columns={columns}
        />
      </Box>
    </Box>
  )
}
export default Contacts
