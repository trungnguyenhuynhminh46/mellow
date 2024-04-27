import { Box, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'
import { getThemeColors } from '@shared/utils/theme.tsx'

const BoardDetailContent = () => {
  const theme = useTheme<CustomThemeType>()
  const themeColors = getThemeColors(theme)
  return <Box sx={{
    height: `calc(100vh - ${theme.mellow.boardDetailHeaderHeight} - ${theme.mellow.headerHeight})`,
    background: themeColors[4]
  }}>
  </Box>
}

export default BoardDetailContent
