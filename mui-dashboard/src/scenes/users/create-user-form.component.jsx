// "id": 1,
// "name": "Jon Snow from JSON",
// "email": "jonsnow@gmail.com",
// "age": 35,
// "phone": "(665)121-5454",
// "access": "admin"

import { useState, useContext } from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { UsersContext } from '../../contexts/users.context'

const CreateUserForm = ({ open }) => {
  const { isCreateUserFormOpen, setIsCreateUserFormOpen } = useContext(UsersContext)

  const handleClose = () => {
    setIsCreateUserFormOpen(false)
  }

  return (
    <div>
      <Dialog open={isCreateUserFormOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Create a New User Account</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill up all the required fields.</DialogContentText>
          <Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              variant="standard"
            />
          </Box>
          <Box>
            <TextField margin="dense" id="email" label="Email" type="email" variant="standard" />
          </Box>
          <Box>
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              variant="standard"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default CreateUserForm
