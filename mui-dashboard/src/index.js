import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { AuthProvider } from './contexts/auth.context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProSidebarProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ProSidebarProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
