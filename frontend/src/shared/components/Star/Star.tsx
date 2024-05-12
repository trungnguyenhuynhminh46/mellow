import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import { useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/types/theme.ts'

type Props = {
    isStarred: boolean
    handleClick: () => void
}
const Start = ({ isStarred, handleClick }: Props) => {
  const theme = useTheme<CustomThemeType>()
  return isStarred ?(
    <StarIcon
      fontSize={'small'}
      onClick={(e) => {
        e.preventDefault()
        handleClick()
      }}
      sx={{
        color: theme.palette.warning.main
      }}
    />
  ) :(
    <StarBorderIcon
      fontSize={'small'}
      onClick={(e) => {
        e.preventDefault()
        handleClick()
      }}
      sx={{
        color: theme.palette.grey[700],
        '&:hover': {
          color: theme.palette.warning.main
        }
      }}
    />
  )
}

export default Start
