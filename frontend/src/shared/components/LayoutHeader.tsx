import { Box, Button, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { getThemeColors } from '@shared/utils/theme.tsx'

const LayoutHeader = () => {
  const theme = useTheme<CustomThemeType>()
  const themeColors = getThemeColors(theme)

  return <Box sx={{
    height: theme.mellow.headerHeight,
    background: themeColors[0]
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
