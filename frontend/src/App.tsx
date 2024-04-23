import { FormControl, InputLabel, SelectChangeEvent, ThemeProvider } from '@mui/material'
import useCustomTheme, { DisplayMode } from './shared/hooks/useCustomTheme.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import CustomSelect from './shared/components/CustomSelect.tsx'

function App() {
  const { theme, displayMode, changeThemeMode } = useCustomTheme()
  const handleChangeThemeMode = (event: SelectChangeEvent<DisplayMode>) => {
    changeThemeMode(event.target.value as DisplayMode)
  }

  const options: { [label: string]: DisplayMode } = {
    'Light': 'light',
    'Dark': 'dark',
    'System': 'system'
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <CustomSelect<DisplayMode> inputLabel={'Display'} options={options} selectedOption={displayMode}
          onChange={handleChangeThemeMode}/>
      </FormControl>
    </ThemeProvider>
  )
}

export default App
