import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeContextProvider } from '@shared/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
)
