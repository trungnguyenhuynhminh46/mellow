import React, { FC, PropsWithChildren, useContext } from 'react'
import { createTheme, PaletteMode, Theme } from '@mui/material'
import useCustomTheme from './hooks/useCustomTheme.tsx'

type ThemeContextType = {
    mode: PaletteMode
    toggleThemeMode: () => void
    theme: Theme
}

export const ThemeContext = React.createContext<ThemeContextType>({
  mode: 'light',
  toggleThemeMode: () => { },
  theme: createTheme()
})

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useCustomTheme()
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider >
  )
}

export const useThemeContext = () => useContext(ThemeContext)