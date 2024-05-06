import { Box, useTheme } from '@mui/material'
import { getThemeColors } from '@shared/utils/theme.tsx'
import { CustomThemeType } from '@shared/types/theme.ts'
import DashboardButton from '@components/LayoutHeader/DashboardButton.tsx'
import SearchSection from '@components/SearchSection.tsx'
import NotificationsButton from '@components/LayoutHeader/NotificationsButton.tsx'
import ProfileButton from '@components/LayoutHeader/ProfileButton.tsx'
import CreateButton from '@components/LayoutHeader/CreateButton.tsx'
import DropdownButton from '@components/DropdownContainer'

const LayoutHeader = () => {
  const theme = useTheme<CustomThemeType>()
  const themeColors = getThemeColors(theme)

  return <Box sx={{
    height: theme.mellow.headerHeight,
    background: themeColors[0]
  }} >
    <Box
      position='relative'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding='6px 1rem'
      height='100%'
    >
      <Box
        display={'flex'}
        alignItems={'center'}
      >
        <DashboardButton />
        <DropdownButton labelText={'Workspaces'} />
        {/*<DropdownButton labelText={'Recent'} />*/}
        {/*<DropdownButton labelText={'Starred'} />*/}
        {/*<DropdownButton labelText={'Templates'} />*/}
        <CreateButton />
      </Box>
      <Box sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '32px'
      }}>
        <SearchSection />
        <NotificationsButton />
        <ProfileButton />
      </Box>
    </Box>
  </Box>
}

export default LayoutHeader
