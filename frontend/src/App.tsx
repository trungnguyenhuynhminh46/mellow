import { Button, ThemeProvider } from '@mui/material'
import useCustomTheme from './shared/hooks/useCustomTheme.tsx'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const { theme, mode, toggleThemeMode } = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        onClick={toggleThemeMode}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    </ThemeProvider>
  )
}

export default App
