import { Avatar, IconButton, useTheme } from '@mui/material'
import avatar from '@assets/temp/image/avatar1.jpg'
import { CustomThemeType } from '@shared/types/theme.ts'

const ProfileButton = () => {
  const theme = useTheme<CustomThemeType>()
  return <IconButton aria-label="delete" size="small" sx={{
    marginLeft: theme.spacing(0.5),
    color: theme.palette.common.white
  }}>
    <Avatar alt="Ảnh con chó" src={avatar} />
  </IconButton>
}

export default ProfileButton
