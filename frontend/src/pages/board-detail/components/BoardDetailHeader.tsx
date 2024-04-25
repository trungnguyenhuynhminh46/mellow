import { Box, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'

const BoardDetailHeader = () => {
  const theme = useTheme<CustomThemeType>()
  return <Box sx={{
    height: theme.mellow.boardDetailHeaderHeight,
    background: 'rgba(38,98,139,0.5)'
  }}>
  </Box>
}

export default BoardDetailHeader