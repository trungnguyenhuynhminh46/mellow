import { Button, ButtonProps, useTheme } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { CustomThemeType } from '@shared/types/theme.ts'

const DashboardButton = (props: ButtonProps) => {
  const theme = useTheme<CustomThemeType>()
  return <Button
    startIcon={<DashboardIcon />}
    variant={'contained'}
    color={'primary'}
    sx={{
      flex:1,
      fontFamily: '"Jersey 15", sans-serif',
      fontSize: '1.5rem',
      height: '32px',
      minWidth: '100px',
      '.MuiButton-startIcon': {
        marginRight: theme.spacing(0.5)
      }
    }}
    {...props} >
        Mellow
  </Button>
}

export default DashboardButton
