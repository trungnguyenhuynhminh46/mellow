import { Link } from 'react-router-dom'
import { WorkspaceOnHeaderType } from '@assets/temp/data/LayoutHeaderData.ts'
import { styled } from '@mui/material/styles'
import { Avatar, Typography, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/types/theme.ts'

type Props = {
    workspaces: WorkspaceOnHeaderType[]
}

type WorkspaceItemProps = {
    workspace: WorkspaceOnHeaderType
}

const StyledWorkspaceMenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  maxWidth: 300
}))

const StyledWorkspaceLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  gap: theme.spacing(1),
  padding: theme.spacing(1),
  marginBottom: theme.spacing(0.5),

  borderRadius: theme.spacing(0.5),
  textDecoration: 'none',
  '&:hover': {
    background: theme.palette.grey[200]
  }
}))

const WorkspaceItem = ({ workspace }: WorkspaceItemProps) => {
  const to = workspace.id ? `/workspace/${workspace.id}` : '/'
  return (
    <StyledWorkspaceLink to={to}>
      <Avatar src={workspace.logo} alt={workspace.name} sx={(theme) => (
        {
          borderRadius: theme.spacing(0.5),
          width: '40px',
          height: '32px'
        }
      )} />
      <Typography
        color='textPrimary'
        fontSize={14}
        fontWeight={600}
      >
        {workspace.name}
      </Typography>
    </StyledWorkspaceLink>
  )
}

const WorkspaceMenu = ({ workspaces }: Props) => {
  const theme = useTheme<CustomThemeType>()
  return (
    <StyledWorkspaceMenuWrapper>
      <Typography
        color={theme.palette.grey[700]}
        fontSize={12}
        fontWeight={600}
        margin={theme.spacing(0.5, 1, 0)}
      >
                Your Workspaces
      </Typography>
      {workspaces.map((workspace) => (
        <WorkspaceItem key={workspace.id} workspace={workspace}/>
      ))}
    </StyledWorkspaceMenuWrapper>
  )
}

export default WorkspaceMenu