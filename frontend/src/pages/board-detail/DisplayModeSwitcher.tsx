import { DisplayMode } from '@shared/hooks/useCustomTheme.tsx'
import CustomSelect from '@components/CustomSelect.tsx'
import { SelectChangeEvent } from '@mui/material'
import { useThemeContext } from '@shared/ThemeContext.tsx'

const DisplayModeSwitcher = () => {
  const { displayMode, changeThemeMode } = useThemeContext()
  const handleChangeThemeMode = (event: SelectChangeEvent<DisplayMode>) => {
    changeThemeMode(event.target.value as DisplayMode)
  }

  const options: { [label: string]: DisplayMode } = {
    'Light': 'light',
    'Dark': 'dark',
    'System': 'system'
  }
  return <CustomSelect<DisplayMode> id={'id-theme-mode'} inputLabel={'Display'} options={options} selectedOption={displayMode}
    onChange={handleChangeThemeMode}/>
}

export default DisplayModeSwitcher
