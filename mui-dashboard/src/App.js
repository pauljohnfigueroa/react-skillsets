import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Topbar from './scenes/global/topbar.component'
import Sidebar from './scenes/global/sidebar.component'
import Dashboard from './scenes/dashboard/dashboard.component'
import Team from './scenes/team.component'
import Invoices from './scenes/invoices/invoices.component'
import Contacts from './scenes/contacts/contacts.component'
import Bar from './scenes/bar/bar.component'
import Form from './scenes/form/form.component'
import Line from './scenes/line/line.component'
import Pie from './scenes/pie/pie.component'
import FAQ from './scenes/faq/faq.component'
import Geography from './scenes/geography/geography.component'
import Calendar from './scenes/calendar/calendar.component'


function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
