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
          '-webkit-user-select': 'none', /* Safari */
          '-ms-user-select': 'none', /* IE 10 and IE 11 */
          'user-select': 'none' /* Standard syntax */
        }
      }} />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
