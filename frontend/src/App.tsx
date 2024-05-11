import CssBaseline from '@mui/material/CssBaseline'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { useThemeContext } from '@shared/ThemeContext.tsx'
import AppRoutes from '@/AppRoutes.tsx'

function App() {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyles styles={{
        body: {
          'userSelect': 'none'
        }
      }} />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
