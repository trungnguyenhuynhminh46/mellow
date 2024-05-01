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
  padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
          color: theme.palette.common.white
        }}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{
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
    <IconButton aria-label="delete" size="medium" sx={{
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
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return onlySmallScreen ? <SearchButton /> : <SearchBar />
}

export default SearchSection