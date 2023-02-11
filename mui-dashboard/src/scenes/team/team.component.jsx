import { useState, useEffect } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import { tokens } from '../../theme'
// import { mockDataTeam } from '../../data/mockData'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

import Header from '../../components/header/header.component'

const API_URL = 'http://localhost:3500/mockDataTeam'
const Team = () => {
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
        const response = await fetch(`${API_URL}?_sort=name&_order=asc&_limit=10`)
        if (!response.ok) throw Error('Did not receive expected data.')
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
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      }
    }
  ]

  return (
    <Box m="20px">
      <Header title="Team" subtitle='There is no "I" in Team' />
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
        {fetchError && <p>Error: {fetchError} </p>}

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
export default Team
