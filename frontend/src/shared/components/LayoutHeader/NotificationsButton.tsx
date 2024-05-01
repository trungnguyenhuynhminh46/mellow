import NotificationsIcon from '@mui/icons-material/Notifications'
import { IconButton, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/types/theme.ts'
import { alpha } from '@mui/material/styles'
const NotificationsButton = () => {
  const theme = useTheme<CustomThemeType>()
  return (
    <IconButton aria-label="delete" size="small" sx={{
      marginLeft: theme.spacing(1),
      color: theme.palette.common.white,
      '&:hover': {
        background: alpha(theme.palette.common.white, 0.1)
      }
    }}>
      <NotificationsIcon fontSize="inherit" />
    </IconButton>
  )
}

export default NotificationsButton
