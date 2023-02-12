import { useState, useEffect, useContext } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import { tokens } from '../../theme'
// import { mockDataTeam } from '../../data/mockData'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

import Header from '../../components/header/header.component'

import CreateUserForm from './create-user-form.component'

import { UsersContext } from '../../contexts/users.context'

const Users = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { isloading, isCreateUserFormOpen, setIsCreateUserFormOpen, fetchError, gridData } =
    useContext(UsersContext)

  // const [gridData, setGridData] = useState([])
  // const [fetchError, setFetchError] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState(false)

  const CustomNoRowsOverlay = () => {
    return fetchError ? <Box sx={{ mt: 1 }}>{fetchError}</Box> : <Box sx={{ mt: 1 }}>No Data.</Box>
  }

  const showAddUserModal = () => {
    console.log('showAddUserModal')
    setIsCreateUserFormOpen(true)
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
      editable: true
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
      <Header
        title="User Management Console"
        subtitle="Manage  user accounts, access, and authorization."
      />
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
        <Button onClick={showAddUserModal}>Add User</Button>
        {isCreateUserFormOpen && <CreateUserForm open={isCreateUserFormOpen} />}
        {fetchError && <p>Error: {fetchError} </p>}
        <DataGrid
          components={{
            Toolbar: GridToolbar,
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay
          }}
          experimentalFeatures={{ newEditingApi: true }}
          loading={isloading}
          rows={gridData}
          columns={columns}
        />
      </Box>
    </Box>
  )
}
export default Users
