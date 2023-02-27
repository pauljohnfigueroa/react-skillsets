import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { AuthProvider } from './contexts/auth.context'
import Layout from './components/layout/Layout.component'
import LoginForm from './scenes/login/LoginForm.component'
import Missing from './components/missing/Missing.component'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <UsersProvider>
            <ContactsProvider>
              <InvoicesProvider>
                <Routes>
                  <Route path="/" element={<LoginForm />} />
                  <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="contacts" element={<Contacts />} />
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
          </UsersProvider>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
