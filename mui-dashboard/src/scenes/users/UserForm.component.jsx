import { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import {
  Box,
  useMediaQuery,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText
} from '@mui/material'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { UsersContext } from '../../contexts/users.context'

const UserForm = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')

  const {
    initFormValues,
    isCreateUserFormOpen,
    setIsCreateUserFormOpen,
    handleAddItem,
    handleUpdateItem,
    setFormValues
  } = useContext(UsersContext)

  const handleClose = () => {
    setIsCreateUserFormOpen(false)
  }

  return (
    <div>
      <Dialog open={isCreateUserFormOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Create a New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill up all the required fields.</DialogContentText>
          <Formik
            onSubmit={initFormValues.id ? handleUpdateItem : handleAddItem}
            initialValues={initFormValues}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
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
                    name="name"
                    id="name"
                    value={values.name}
                    label="Name"
                    type="text"
                    variant="outlined"
                    sx={{ gridColumn: 'span 4' }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <TextField
                    fullWidth
                    margin="dense"
                    name="email"
                    id="email"
                    value={values.email}
                    label="Email"
                    type="email"
                    variant="outlined"
                    sx={{ gridColumn: 'span 4' }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    label="Phone"
                    type="text"
                    variant="outlined"
                    sx={{ gridColumn: 'span 4' }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    fullWidth
                    margin="dense"
                    name="age"
                    id="age"
                    value={values.age}
                    label="Age"
                    type="number"
                    variant="outlined"
                    sx={{ gridColumn: 'span 4' }}
                    InputProps={{ inputProps: { min: 0, max: 150 } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Access Level</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="access"
                      name="access"
                      value={values.access}
                      label="Access Level"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="manager">Manager</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <DialogActions>
                  <Button onClick={handleClose} variant="outlined">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={values.id ? () => setFormValues(values) : undefined}
                  >
                    {values.id ? 'Update' : 'Save'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default UserForm
