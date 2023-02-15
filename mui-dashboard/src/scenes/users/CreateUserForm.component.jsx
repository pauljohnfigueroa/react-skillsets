import { useContext } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { UsersContext } from '../../contexts/users.context'

const initialValues = {
  id: null,
  name: null,
  email: null,
  age: 0,
  phone: null,
  access: 'user'
}

const CreateUserForm = ({ open }) => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')
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
          <Formik>
            {() => (
              <Form>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
                  }}
                >
                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    variant="outlined"
                    sx={{ gridColumn: 'span 4' }}
                  />

                  <TextField
                    fullWidth
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    sx={{ gridColumn: 'span 4' }}
                  />

                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="text"
                    variant="filled"
                    sx={{ gridColumn: 'span 4' }}
                  />
                </Box>
              </Form>
            )}
          </Formik>
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
