import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import { CustomThemeType } from '@shared/types/theme.ts'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

const SearchBar = () => {
  const theme = useTheme<CustomThemeType>()
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{
          color: theme.palette.common.white,
          width: 20
        }}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          fontSize:'14px',
          color: theme.palette.common.white,
          '::placeholder': {
            color: theme.palette.common.white
          }
        }}
      />
    </Search>
  )
}

const SearchButton = () => {
  const theme = useTheme<CustomThemeType>()
  return (
    <IconButton aria-label="delete" size="small" sx={{
      marginLeft: theme.spacing(1),
      color: theme.palette.common.white,
      '&:hover': {
        background: alpha(theme.palette.common.white, 0.1)
      }
    }}>
      <SearchIcon />
    </IconButton>
  )
}

const SearchSection = () => {
  const theme = useTheme<CustomThemeType>()
  const downSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return downSmallScreen ? <SearchButton /> : <SearchBar />
}

export default SearchSection
