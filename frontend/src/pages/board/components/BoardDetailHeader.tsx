import { Box, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/types/theme.ts'
import { getThemeColors } from '@shared/utils/theme.tsx'

const BoardDetailHeader = () => {
  const theme = useTheme<CustomThemeType>()
  const themeColors = getThemeColors(theme)
  return <Box sx={{
    height: theme.mellow.boardDetailHeaderHeight,
    background: themeColors[2]
  }}>
  </Box>
}

export default BoardDetailHeader
