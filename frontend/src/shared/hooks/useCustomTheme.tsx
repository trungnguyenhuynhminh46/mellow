import { createTheme, PaletteMode, useMediaQuery } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'
import React from 'react'

export type DisplayMode = 'light' | 'dark' | 'system';

export default function useCustomTheme() {
  const systemPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [displayMode, setDisplayMode] = React.useState<DisplayMode>((): DisplayMode => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('mode') || 'light') as DisplayMode
    }
    return 'light'
  })

  const [mode, setMode] = React.useState<PaletteMode>(():PaletteMode => {
    if (typeof window !== 'undefined') {
      const displayMode = localStorage.getItem('mode') as DisplayMode
      return displayMode === 'system' ? (systemPrefersDarkMode ? 'dark' : 'light') : displayMode
    }
    return 'light'
  })

  const changeThemeMode = (newDisplayMode: DisplayMode) => {
    const newMode = newDisplayMode === 'system' ? (systemPrefersDarkMode ? 'dark' : 'light') : newDisplayMode
    setDisplayMode(newDisplayMode)
    setMode(newMode)
    localStorage.setItem('mode', newDisplayMode)
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
    displayMode: displayMode,
    changeThemeMode
  }
}