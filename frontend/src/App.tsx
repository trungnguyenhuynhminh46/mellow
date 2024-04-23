import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material'
import useCustomTheme, { DisplayMode } from './shared/hooks/useCustomTheme.tsx'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const { theme, displayMode, changeThemeMode } = useCustomTheme()
  const handleChangeThemeMode = (event: SelectChangeEvent<DisplayMode>) => {
    changeThemeMode(event.target.value as DisplayMode)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={displayMode}
          label="Age"
          onChange={handleChangeThemeMode}
        >
          <MenuItem value={'light'}>Light</MenuItem>
          <MenuItem value={'dark'}>Dark</MenuItem>
          <MenuItem value={'system'}>System</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  )
}

export default App
