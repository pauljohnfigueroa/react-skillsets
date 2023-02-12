// "id": 1,
// "name": "Jon Snow from JSON",
// "email": "jonsnow@gmail.com",
// "age": 35,
// "phone": "(665)121-5454",
// "access": "admin"

import { useState, useContext } from 'react'
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
      <Dialog open={isCreateUserFormOpen} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default CreateUserForm
