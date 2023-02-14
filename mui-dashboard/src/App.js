import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Topbar from './scenes/global/topbar.component'
import SideBar from './scenes/global/sidebar.component'
import Dashboard from './scenes/dashboard/dashboard.component'
import Users from './scenes/users/users.component'
import Contacts from './scenes/contacts/contacts.component'
import Invoices from './scenes/invoices/invoices.component'
import ProfileForm from './scenes/form/profile-form.component'
import EventCalendar from './scenes/event-calendar/event-calendar.component'
import Faq from './scenes/faq/faq.component'
import Bar from './scenes/bar/bar.component'
import Pie from './scenes/pie/pie.component'
import Line from './scenes/line/line.component'
import Geography from './scenes/geography/geography.component'

import Settings from './scenes/settings/settings.component'

import { UsersProvider } from './contexts/users.context'
import { InvoicesProvider } from './contexts/invoices.context'
function App() {

  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UsersProvider>
          <InvoicesProvider>
            <div className="app">

              <SideBar />

              <main className="content">

                <Topbar />

                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/profile-form" element={<ProfileForm />} />
                  <Route path="/event-calendar" element={<EventCalendar />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/bar-chart" element={<Bar />} />
                  <Route path="/pie-chart" element={<Pie />} />
                  <Route path="/line-chart" element={<Line />} />
                  <Route path="/geography-chart" element={<Geography />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>

              </main>
            </div>
          </InvoicesProvider>
        </UsersProvider>
      </ThemeProvider>
    </ColorModeContext.Provider >
  )
}

export default App
