import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import DisplayModeSwitcher from '@/pages/board-detail/DisplayModeSwitcher.tsx'
import { useThemeContext } from '@shared/ThemeContext.tsx'

function App() {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <DisplayModeSwitcher />
    </ThemeProvider>
  )
}

export default App
