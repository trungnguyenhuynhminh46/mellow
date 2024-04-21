import React from 'react'
import { Button, PaletteMode, ThemeProvider } from '@mui/material'
import useCustomTheme from './shared/hooks/useCustomTheme.tsx'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const [mode, setMode] = React.useState<PaletteMode | undefined>((): PaletteMode | undefined => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('mode') || 'light') as PaletteMode
    }
    return 'light'
  })

  // a new theme is created every time the mode changes
  const theme = useCustomTheme(mode)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        onClick={() => {
          const newMode = mode === 'light' ? 'dark' : 'light'
          setMode(newMode)
          localStorage.setItem('mode', newMode)
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    </ThemeProvider>
  )
}

export default App
