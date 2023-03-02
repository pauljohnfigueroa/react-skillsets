import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { ScenesProvider } from './contexts/scenes.context'

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
import RequireAuth from './utils/RequireAuth.util'

function App() {
  const [theme, colorMode] = useMode()

  const [allowedRoles, setAllowedRoles] = useState({
    USERS_MANAGEMENT_PAGE: ['admin'],
    ADMIN_DASHBOARD: ['admin'],
    USER_DASHBOARD: ['user', 'manager'],
    PROFILE_PAGE: ['user'],
    CONTACTS_PAGE: ['manager']
  })

  // useEffect(() => {
  //   const API_URL = 'http://localhost:3500/scenePermissions'

  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL)
  //       if (!response.ok) throw Error('Did not receive the expected data.')
  //       const items = await response.json()
  //       setAllowedRoles({ items })
  //       console.log('allowedRoles in App useEffect', allowedRoles)
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
          <ScenesProvider>
            <ContactsProvider>
              <InvoicesProvider>
                <Routes>
                  <Route path="/" element={<LoginForm />} />
                  <Route path="/" element={<Layout />}>
                    <Route element={<RequireAuth allowedRoles={allowedRoles?.USER_DASHBOARD} />}>
                      <Route path="dashboard" element={<Dashboard />} />
                    </Route>

                    <Route
                      element={<RequireAuth allowedRoles={allowedRoles?.USERS_MANAGEMENT_PAGE} />}
                    >
                      <Route path="users" element={<Users />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={allowedRoles?.CONTACTS_PAGE} />}>
                      <Route path="contacts" element={<Contacts />} />
                    </Route>

                    <Route path="invoices" element={<Invoices />} />
                    <Route path="profile-form" element={<ProfileForm />} />
                    <Route path="event-calendar" element={<EventCalendar />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="bar-chart" element={<Bar />} />
                    <Route path="pie-chart" element={<Pie />} />
                    <Route path="line-chart" element={<Line />} />
                    <Route path="geography-chart" element={<Geography />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="*" element={<Missing />} />
                </Routes>
              </InvoicesProvider>
            </ContactsProvider>
          </ScenesProvider>
        </UsersProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
