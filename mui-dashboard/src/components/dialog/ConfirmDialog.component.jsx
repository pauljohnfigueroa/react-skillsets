import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { Formik, Form } from 'formik'
import * as yup from 'yup'

const dialogSchema = yup.object().shape({
  confirmation: yup
    .string()
    .matches('delete', "Please type 'delete' to confirm action.")
    .required('Required')
})

const ConfirmDialogForm = ({ open, handleClose, handleConfirm }) => {
  const handleConfirmSubmit = values => {
    if (values.confirmation !== 'delete') {
      //console.log("Please type 'delete' to confirm action.")
      return
    }
    //console.log('Confirmed delete', values.confirmation)
    handleConfirm()
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are going to delete an item from the database. Please type <em>delete</em> to
            confirm action.
          </DialogContentText>
          <Formik
            onSubmit={(values, actions) => {
              handleConfirmSubmit(values)
            }}
            initialValues={{ confirmation: '' }}
            validationSchema={dialogSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <Form>
                <TextField
                  autoFocus
                  margin="dense"
                  id="confirmation"
                  name="confirmation"
                  label="Confirmation"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.confirmation && !!errors.confirmation}
                  helperText={touched.confirmation && errors.confirmation}
                />
                <DialogActions>
                  <Button onClick={handleClose} variant="contained">
                    Cancel
                  </Button>
                  <Button
                    disabled={values.confirmation !== 'delete' ? true : false}
                    type="submit"
                    sx={{ minWidth: 100 }}
                    variant="outlined"
                  >
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

export default ConfirmDialogForm
