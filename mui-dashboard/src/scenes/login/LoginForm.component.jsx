import { Box, Button, TextField, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { Formik, Form } from 'formik'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const initialFormValues = {
  email: '',
  passowrd: ''
}

const LoginForm = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h1">Sign in</Typography>
      </Box>
      <Formik initialValues={initialFormValues}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <Form>
            <Box display="grid" gap="30px" minWidth="300px">
              <TextField fullWidth autoFocus name="email" id="email" value={values.email} />
              <TextField
                fullWidth
                autoFocus
                name="password"
                id="password"
                type="password"
                value={values.password}
              />
            </Box>
            <Box display="grid" gap="30px" minWidth="300px" height="50px" marginTop="40px">
              <Button variant="contained">Login</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default LoginForm
