import { createTheme, PaletteMode, Theme, useMediaQuery } from '@mui/material'
import React from 'react'
import { generateThemeColors, rgb, RGB } from '@shared/utils/colors.tsx'

export type DisplayMode = 'light' | 'dark' | 'system';

export type ExtendedThemeType = {
  mellow: {
    headerHeight: string
    boardDetailHeaderHeight: string
    light: {
        themeColors: RGB[]
    }
    dark: {
        themeColors: RGB[]
    }
  }
}
const extendedTheme: ExtendedThemeType = {
  mellow: {
    headerHeight: '48px',
    boardDetailHeaderHeight: '56px',
    light: {
      themeColors: []
    },
    dark: {
      themeColors: []
    }
  }
}
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

  const [themeLightColor, setThemeLightColor] = React.useState<RGB|string>(rgb(69, 171, 239))
  extendedTheme.mellow.light.themeColors = generateThemeColors(themeLightColor)
  extendedTheme.mellow.dark.themeColors = generateThemeColors(rgb(0, 0, 0))

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

  const theme = {
    ...extendedTheme,
    ...modifiedTheme
  }

  return {
    theme,
    displayMode,
    changeThemeMode,
    setThemeLightColor
  }
}

export type CustomThemeType = ExtendedThemeType & Theme
