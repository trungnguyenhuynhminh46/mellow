import { createTheme, PaletteMode } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'
import React from 'react'

export default function useCustomTheme() {
  const [mode, setMode] = React.useState<PaletteMode>((): PaletteMode => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('mode') || 'light') as PaletteMode
    }
    return 'light'
  })

  const toggleThemeMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('mode', newMode)
  }

  const modifiedTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800]
          }
        }
        : {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900]
          },
          text: {
            primary: '#fff',
            secondary: grey[500]
          }
        })
    }
  })
  return {
    theme: modifiedTheme,
    mode,
    toggleThemeMode
  }
}