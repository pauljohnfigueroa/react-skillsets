// import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Dashboard from './scenes/dashboard/Dashboard.component'
import Users from './scenes/users/Users.component'
import Contacts from './scenes/contacts/Contacts.component'
import Invoices from './scenes/invoices/Invoices.component'
import ProfileForm from './scenes/form/ProfileForm.component'
import EventCalendar from './scenes/event-calendar/EventCalendar.component'
import Faq from './scenes/faq/Faq.component'
import Bar from './scenes/bar/Bar.component'
import Pie from './scenes/pie/Pie.component'
import Line from './scenes/line/Line.component'
import Geography from './scenes/geography/Geography.component'

import Settings from './scenes/settings/Settings.component'

import { UsersProvider } from './contexts/users.context'
import { ContactsProvider } from './contexts/contacts.context'
import { InvoicesProvider } from './contexts/invoices.context'

import Layout from './components/layout/Layout.component'
import LoginForm from './scenes/login/LoginForm.component'
import Missing from './components/missing/Missing.component'

import { useAuthContext } from './hooks/useAuthContext'

// const API_URL = 'http://localhost:3500/scenePermissions'

function App() {
  const [theme, colorMode] = useMode()
  // const [allowedRoles, setAllowedRoles] = useState([])

  const { user } = useAuthContext()

  // set where to redirect user after successful login
  // const location = useLocation()
  // console.log('location', location)
  // const fromLoc = location.pathname || '/dashboard'
  // console.log('fromLoc', fromLoc)

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL)
  //       if (!response.ok) throw Error('Did not receive the expected data.')
  //       const items = await response.json()
  //       setAllowedRoles(items[0])
  //     } catch (err) {
  //       console.log(err.message)
  //     }
  //   }
  //   fetchItems()
  // }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UsersProvider>
          <ContactsProvider>
            <InvoicesProvider>
              <Routes>
                <Route path="/" element={user ? <Navigate to='/dashboard' /> : <LoginForm />} />
                <Route path="/" element={<Layout />}>
                  {/* <Route element={<RequireAuth allowedRoles={allowedRoles?.DASHBOARD_PAGE} />}> */}
                  {/* <Route path="dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} /> */}
                  {/* </Route> */}

                  {/* <Route
                    element={<RequireAuth allowedRoles={allowedRoles?.USERS_MANAGEMENT_PAGE} />}
                  > */}
                  {/* <Route path="users" element={user ? <Users /> : <Navigate to="/" />} /> */}
                  {/* </Route> */}


                  <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
                  <Route path="/users" element={user ? <Users /> : <Navigate to="/" />} />

                  <Route path="/contacts" element={user ? <Contacts /> : <Navigate to="/" />} />
                  <Route path="/invoices" element={user ? <Invoices /> : <Navigate to="/" />} />
                  <Route path="/profile-form" element={user ? <ProfileForm /> : <Navigate to="/" />} />
                  <Route path="/event-calendar" element={user ? <EventCalendar /> : <Navigate to="/" />} />
                  <Route path="/faq" element={user ? <Faq /> : <Navigate to="/" />} />
                  <Route path="/bar-chart" element={user ? <Bar /> : <Navigate to="/" />} />
                  <Route path="/pie-chart" element={user ? <Pie /> : <Navigate to="/" />} />
                  <Route path="/line-chart" element={user ? <Line /> : <Navigate to="/" />} />
                  <Route path="/geography-chart" element={user ? <Geography /> : <Navigate to="/" />} />
                  <Route path="/settings" element={user ? <Settings /> : <Navigate to="/" />} />
                </Route>
                <Route path="*" element={<Missing />} />
              </Routes>
            </InvoicesProvider>
          </ContactsProvider>
        </UsersProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
