import { SelectChangeEvent, ThemeProvider } from '@mui/material'
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
      <CustomSelect<DisplayMode> id={'id-theme-mode'} inputLabel={'Display'} options={options} selectedOption={displayMode}
        onChange={handleChangeThemeMode}/>
    </ThemeProvider>
  )
}

export default App
