import { DisplayMode } from '@shared/hooks/useCustomTheme.tsx'
import CustomSelect from '@components/CustomSelect.tsx'
import { SelectChangeEvent } from '@mui/material'
import { useThemeContext } from '@shared/ThemeContext.tsx'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { ReactElement } from 'react'

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

  const icons: { [label: string]: ReactElement } = {
    'Light': <LightModeIcon fontSize={'small'} />,
    'Dark': <SettingsBrightnessIcon fontSize={'small'} />,
    'System': <DarkModeOutlinedIcon fontSize={'small'} />
  }

  return <CustomSelect<DisplayMode> id={'id-theme-mode'} inputLabel={'Mode'} options={options} icons={icons} selectedOption={displayMode}
    onChange={handleChangeThemeMode}/>
}

export default DisplayModeSwitcher
