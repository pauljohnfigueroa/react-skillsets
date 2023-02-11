import { useEffect, useState } from 'react'
import { Box, LinearProgress, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
// import { mockDataInvoices } from '../../data/mockData'

import Header from '../../components/header/header.component'

const API_URL = 'http://localhost:3500/mockDataInvoices'

const Invoices = () => {
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
        const response = await fetch(API_URL)
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
      headerName: 'ID'
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: params => (
        <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
      )
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1
    }
  ]

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of Invoice Balances." />
      <Box
        m="40px 0 0 0"
        height="100vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[400]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.primary[400],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-checkbox': {
            color: `${colors.greenAccent[200]} !important`
          }
        }}
      >
        {fetchError && <p>Error: {fetchError} </p>}

        <DataGrid
          components={{
            Tollbar: GridToolbar,
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay
          }}
          loading={isLoading}
          checkboxSelection
          rows={gridData}
          columns={columns}
        />
      </Box>
    </Box>
  )
}
export default Invoices
