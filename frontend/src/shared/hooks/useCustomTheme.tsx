import { createTheme, PaletteMode, useMediaQuery } from '@mui/material'
import React from 'react'
import { generateThemeColors } from '@shared/utils/colors.tsx'
import RGB from '@shared/classes/RGB.ts'
import { DisplayMode, ExtendedThemeType } from '@shared/types/theme.ts'

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

const getDisplayMode = (): DisplayMode => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('mode') || 'light') as DisplayMode
  }
  return 'light'
}

const getThemeMode = (displayMode: DisplayMode, systemPrefersDarkMode: boolean): PaletteMode => {
  return displayMode === 'system' ? (systemPrefersDarkMode ? 'dark' : 'light') : displayMode
}
export default function useCustomTheme() {
  const [themeLightColor, setThemeLightColor] = React.useState<RGB|string>(new RGB(69, 171, 239))
  extendedTheme.mellow.light.themeColors = generateThemeColors(themeLightColor)
  extendedTheme.mellow.dark.themeColors = generateThemeColors(new RGB(44, 62, 80))

  const systemPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [displayMode, setDisplayMode] = React.useState<DisplayMode>(getDisplayMode)
  const [mode, setMode] = React.useState<PaletteMode>(():PaletteMode => {
    return getThemeMode(displayMode, systemPrefersDarkMode)
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
