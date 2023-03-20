import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { Formik, Form } from 'formik'
// import * as yup from 'yup'

const ConfirmDialog = ({ open, handleClose, handleConfirm }) => {
  const handleConfirmSubmit = values => {
    console.log('Confirmed delete', values._id)
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are going to delete an item from the database. Please type <em>delete</em> to
            confirm.
          </DialogContentText>
          <Formik onSubmit={(values, actions) => handleConfirmSubmit(values)} initialValues="">
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <Form>
                <TextField
                  autoFocus
                  margin="dense"
                  id="confirm"
                  label="Confirmation"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" sx={{ minWidth: 100 }} variant="contained">
                    Delete
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

export default ConfirmDialog
