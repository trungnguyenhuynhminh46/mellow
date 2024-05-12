import { createTheme, PaletteMode, useMediaQuery } from '@mui/material'
import React from 'react'
import { generateThemeColors } from '@shared/utils/colors.tsx'
import RGB from '@shared/classes/RGB.ts'
import { DisplayMode, ExtendedThemeType } from '@shared/types/theme.ts'

const extendedTheme: ExtendedThemeType = {
  mellow: {
    headerHeight: '44px',
    boardDetailHeaderHeight: '52px',
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
  const lightThemeColors = generateThemeColors(themeLightColor)
  const darkThemeColors = generateThemeColors(new RGB(44, 62, 80))
  extendedTheme.mellow.light.themeColors = lightThemeColors
  extendedTheme.mellow.dark.themeColors = darkThemeColors

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

  const lightTheme = {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      main: lightThemeColors[3],
      light: lightThemeColors[4],
      dark: lightThemeColors[2],
      contrastText: '#ffffff'
    },
    secondary: {
      main: 'rgba(255,255,255,0.15)',
      light: 'rgba(255,255,255,0.1)',
      dark: 'rgba(255,255,255,0.25)',
      contrastText: '#ffffff'
    }
  }
  const darkTheme = {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      main: darkThemeColors[3],
      light: darkThemeColors[4],
      dark: darkThemeColors[2],
      contrastText: '#ffffff'
    },
    secondary: {
      main: 'rgba(255,255,255,0.15)',
      light: 'rgba(255,255,255,0.1)',
      dark: 'rgba(255,255,255,0.25)',
      contrastText: '#ffffff'
    }
  }

  const modifiedTheme = createTheme({
    typography:{
      fontSize: 14,
      button: {
        fontWeight: 'bold'
      }
    },
    components:{
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true
        },
        styleOverrides: {
          root: {
            borderRadius: 4,
            padding: '6px 8px'
          }
        }
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiTypography: {
        styleOverrides:{
          root: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }
        }
      }
    },
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
