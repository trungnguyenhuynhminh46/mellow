import { Box, Button, useTheme } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { getThemeColors } from '@shared/utils/theme.tsx'
import { CustomThemeType } from '@shared/types/theme.ts'

const LayoutHeader = () => {
  const theme = useTheme<CustomThemeType>()
  const themeColors = getThemeColors(theme)

  return <Box sx={{
    height: theme.mellow.headerHeight,
    background: themeColors[0]
  }} >
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'0 1rem'}
      height={'100%'}
    >
      <Button
        variant={'contained'}
        color={'primary'}
        startIcon={<DashboardIcon />}>
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
