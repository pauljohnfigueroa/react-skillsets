import { useContext } from 'react'
import { Box, Stack, IconButton, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'

import Header from '../../components/header/Header.component'
import UserForm from './UserForm.component'

import { UsersContext } from '../../contexts/users.context'
import { tokens } from '../../theme'

const Users = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const {
    initialValues,
    setInitFormValues,
    isLoading,
    isCreateUserFormOpen,
    setIsCreateUserFormOpen,
    fetchError,
    gridData,
    pageSize,
    setPageSize,
    handleDeleteMultiple,
    handleEdit,
    handleAddItem,
    setCheckedItemsIds,
    showEditForm,
    showCreateForm
  } = useContext(UsersContext)

  const CustomNoRowsOverlay = () => {
    return fetchError ? <Box sx={{ mt: 1 }}>{fetchError}</Box> : <Box sx={{ mt: 1 }}>No Data.</Box>
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
      field: 'password',
      headerName: 'Password',
      headerAlign: 'left',
      align: 'left'
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]}>{role}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: rowdata => {
        return (
          <Box>
            <IconButton onClick={() => showEditForm(rowdata.row)}>
              <ModeEditOutlineOutlinedIcon />
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
        subtitle="Manage user accounts, role, and authorization."
      />
      <Box m="10px 0 0 0">
        <Stack spacing={2} direction="row">
          <Button onClick={showCreateForm} variant="outlined">
            Add User
          </Button>
          <Button onClick={handleDeleteMultiple} variant="outlined">
            Delete Selected
          </Button>
        </Stack>
      </Box>

      {isCreateUserFormOpen && <UserForm />}
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
