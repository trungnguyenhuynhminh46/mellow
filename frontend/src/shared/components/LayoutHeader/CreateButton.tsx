import { Button, ButtonProps, useMediaQuery, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/types/theme.ts'
import AddIcon from '@mui/icons-material/Add'

const CreateButton = (props: ButtonProps) => {
  const theme = useTheme<CustomThemeType>()
  const downMediumScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return <Button
    variant={'contained'}
    color={'secondary'}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      height: '32px',
      minWidth: '80px',
      [theme.breakpoints.down('sm')]: {
        minWidth: '32px',
        width: '32px'
      },
      marginLeft: theme.spacing(1)
    }}
    {...props} >
    {
      downMediumScreen ? <AddIcon fontSize='small' /> : 'Create'
    }
  </Button>
}

export default CreateButton
