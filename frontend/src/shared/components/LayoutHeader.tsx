import { Box, Button, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'
import DashboardIcon from '@mui/icons-material/Dashboard'

const LayoutHeader = () => {
  const theme = useTheme<CustomThemeType>()
  const themeMode = theme.palette.mode
  const lightThemeColors = theme.mellow.light.themeColors
  const darkThemeColors = theme.mellow.dark.themeColors

  return <Box sx={{
    height: theme.mellow.headerHeight,
    background: themeMode === 'light' ? lightThemeColors[0].toString() : darkThemeColors[0].toString()
  }} >
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      height: '100%'
    }}>
      <Button startIcon={<DashboardIcon />} sx={{
        color: 'white',
        '&:hover': {
          color: 'white'
        }
      }}>
        Dashboard
      </Button>
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
      </Box>
    </Box>
  </Box>
}

export default LayoutHeader
