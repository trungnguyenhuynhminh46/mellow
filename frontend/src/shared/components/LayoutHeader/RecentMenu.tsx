import { BoardOnHeaderType } from '@assets/temp/data/LayoutHeaderData.ts'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { Avatar, Box, Chip, Typography } from '@mui/material'
import Star from '@components/Star'
import { useState } from 'react'

type RecentItemProps = {
    board: BoardOnHeaderType
}

type Props ={
    recentBoards: BoardOnHeaderType[]
}

const StyledRecentMenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  maxWidth: 300,
  minWidth: 260
}))

const StyledRecentLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  gap: theme.spacing(1),
  padding: theme.spacing(1),
  marginBottom: theme.spacing(0.5),

  borderRadius: theme.spacing(0.5),
  textDecoration: 'none',
  '&:hover': {
    background: theme.palette.grey[100]
  }
}))

const RecentItem = ({ board }: RecentItemProps) => {
  const [isStarred, setIsStarred] = useState(false)
  const [displayStar, setDisplayStar] = useState(false)
  const to = board.id ? `/board/${board.id}` : '/'
  return (
    <StyledRecentLink to={to}>
      <Avatar src={board.logo} alt={board.title} sx={(theme) => (
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
        {board.title}
      </Typography>
      <Box
        onMouseEnter={() => setDisplayStar(true)}
        onMouseLeave={() => setDisplayStar(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyItems:'flex-end',
          gap: 1,
          marginLeft: 'auto'
        }}>
        <Chip label="Template" sx={{
          fontSize: '10px',
          fontWeight: 600,
          background: theme => theme.palette.grey[300],
          color: theme => theme.palette.grey[900],

          borderRadius: '4px',
          height: '24px',
          '.MuiChip-label':{
            paddingLeft: '4px',
            paddingRight: '4px'
          }
        }} />
        {(displayStar || isStarred) && <Star isStarred={isStarred} handleClick={() => {
          setIsStarred(!isStarred)
        }}/>}
      </Box>
    </StyledRecentLink>
  )
}

const RecentMenu = ({ recentBoards }: Props) => {
  return (
    <StyledRecentMenuWrapper>
      {recentBoards.map((board) => (
        <RecentItem key={board.id} board={board} />
      ))}
    </StyledRecentMenuWrapper>
  )
}

export default RecentMenu
