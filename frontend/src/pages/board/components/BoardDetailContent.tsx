import { Box, useTheme } from '@mui/material'
import { getThemeColors } from '@shared/utils/theme.tsx'
import { CustomThemeType } from '@shared/types/theme.ts'

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
