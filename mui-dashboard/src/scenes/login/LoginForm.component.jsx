import { useContext } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { Formik, Form } from 'formik'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { UsersContext } from '../../contexts/users.context'
import { AuthContext } from '../../contexts/auth.context'

const LoginForm = () => {
  const { API_URL } = useContext(UsersContext)
  const { userData, setUserData, initialFormValues } = useContext(AuthContext)

  const logInUser = () => {
    // we can use axios instead of fetch
    fetch('http://localhost:3500/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('user', JSON.stringify(data))
        }
        console.log(data.user, data.accessToken)
      })
    //alert(`Login form submitted, ${formValues.email}, ${formValues.password}`)
  }

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
        <Typography variant="h1">Sign In</Typography>
      </Box>
      <Formik initialValues={initialFormValues} onSubmit={logInUser}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <Form>
            <Box display="grid" gap="30px" minWidth="300px">
              <TextField
                fullWidth
                autoFocus
                name="email"
                id="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth
                name="password"
                id="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>
            <Box display="grid" gap="30px" minWidth="300px" height="50px" marginTop="40px">
              <Button type="submit" variant="contained" onClick={() => setUserData(values)}>
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default LoginForm
