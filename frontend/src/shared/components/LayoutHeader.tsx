import { Box, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'

const LayoutHeader = () => {
  const theme = useTheme<CustomThemeType>()
  return <Box sx={{
    height: theme.mellow.headerHeight,
    background: '#26628B'
  }} >
  </Box>
}

export default LayoutHeader