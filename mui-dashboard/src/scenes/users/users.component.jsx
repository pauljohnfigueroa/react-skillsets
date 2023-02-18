import { useContext, useState } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'
import { tokens } from '../../theme'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'

import Header from '../../components/header/Header.component'
import CreateUserForm from './CreateUserForm.component'

import { UsersContext } from '../../contexts/users.context'
import apiRequest from '../../api/apiRequest.api'

const Users = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [checkedItemsIds, setCheckedItemsIds] = useState([])

  const {
    isLoading,
    isCreateUserFormOpen,
    setIsCreateUserFormOpen,
    fetchError,
    gridData,
    setGridData,
    pageSize,
    setPageSize,
    setFetchError,
    API_URL
  } = useContext(UsersContext)

  const CustomNoRowsOverlay = () => {
    return fetchError ? <Box sx={{ mt: 1 }}>{fetchError}</Box> : <Box sx={{ mt: 1 }}>No Data.</Box>
  }

  const showAddUserModal = () => {
    setIsCreateUserFormOpen(true)
  }

  const handleAddItem = async values => {
    const response = await fetch(API_URL)
    const data = await response.json()
    const id = data.length ? data[data.length - 1].id + 1 : 1
    const newItem = { id, ...values }
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

  const handleDeleteSelected = () => {
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
            borderRadius="4px"
          >
            {/* {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />} */}
            <Typography color={colors.grey[100]}>{access}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: () => {
        return (
          <Box>
            <IconButton onClick={() => alert('Save')}>
              <SaveOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => alert('Edit')}>
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => alert('Delete')}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        )
      }
    }
  ]

  return (
    <Box m="20px">
      <Header
        title="User Management Console"
        subtitle="Manage user accounts, access, and authorization."
      />
      <Box m="10px 0 0 0">
        <Button m="2" onClick={showAddUserModal} variant="outlined">
          Add User
        </Button>
        <Button m="2" onClick={handleDeleteSelected} variant="outlined">
          Delete Selected
        </Button>
      </Box>
      {isCreateUserFormOpen && <CreateUserForm handleAddItem={handleAddItem} />}
      <Box
        m="10px 0 0 0"
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
          sx={{
            boxShadow: 4
          }}
          components={{
            Toolbar: GridToolbar,
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay
          }}
          experimentalFeatures={{ newEditingApi: true }}
          loading={isLoading}
          pageSize={pageSize}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          rows={gridData}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={ids => {
            // pass the ids to a state
            // console.log(ids)
            setCheckedItemsIds(ids)
          }}
        />
      </Box>
    </Box>
  )
}
export default Users
