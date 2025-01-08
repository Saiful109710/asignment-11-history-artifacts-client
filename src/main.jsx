import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
