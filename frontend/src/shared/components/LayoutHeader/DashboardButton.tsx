import { Button, ButtonProps } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'

const DashboardButton = (props: ButtonProps) => (
  <Button
    startIcon={<DashboardIcon />}
    variant={'contained'}
    color={'primary'}
    {...props} >
    Dashboard
  </Button>
)

export default DashboardButton
