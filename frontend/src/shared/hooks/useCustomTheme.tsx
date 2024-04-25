import { createTheme, PaletteMode, useMediaQuery } from '@mui/material'
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

  const lightTheme = {}
  const darkTheme = {}

  const modifiedTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? lightTheme
        : darkTheme)
    }
  })
  return {
    theme: modifiedTheme,
    displayMode: displayMode,
    changeThemeMode
  }
}