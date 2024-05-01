import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { useThemeContext } from '@shared/ThemeContext.tsx'
import AppRoutes from '@/AppRoutes.tsx'

function App() {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
