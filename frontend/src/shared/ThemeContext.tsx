import React, { FC, PropsWithChildren, useContext } from 'react'
import { createTheme, Theme } from '@mui/material'
import useCustomTheme from './hooks/useCustomTheme.tsx'
import { DisplayMode } from '@shared/types/theme.ts'

type ThemeContextType = {
    displayMode: DisplayMode
    changeThemeMode: (mode: DisplayMode) => void
    theme: Theme
}

export const ThemeContext = React.createContext<ThemeContextType>({
  displayMode: 'light',
  changeThemeMode: (): void => {
  },
  theme: createTheme()
})

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useCustomTheme()
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
