import { Box, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'

const BoardDetailContent = () => {
  const theme = useTheme<CustomThemeType>()
  return <Box sx={{
    height: `calc(100vh - ${theme.mellow.boardDetailHeaderHeight}) - ${theme.mellow.headerHeight}`
  }}>
  </Box>
}

export default BoardDetailContent