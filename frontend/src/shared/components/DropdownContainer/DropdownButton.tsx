import { ReactNode, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { alpha, styled } from '@mui/material/styles'
import useOnClickOutside from '@shared/hooks/useOnClickOutside.tsx'

type Props = {
    labelText: string,
    children?: ReactNode
}

const StyledDropdownButtonWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '32px',
  marginLeft: theme.spacing(1)
}))

type StyledDropdownButtonProps = {
  isActive?: boolean
}

const StyledDropdownButton = styled('div')<StyledDropdownButtonProps>(({ theme, isActive=false }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '100%',
  padding: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  gap: theme.spacing(0.5),
  marginLeft: theme.spacing(1),

  background: isActive ? alpha(theme.palette.common.white, 0.25) : 'transparent',
  color: theme.palette.common.white,
  cursor: 'pointer',
  '&:hover': {
    background: isActive ? alpha(theme.palette.common.white, 0.25) : alpha(theme.palette.common.white, 0.15)
  },
  transition: 'background 0.3s'
}))

const StyledOptionsContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  left:  theme.spacing(1),
  top: 0,
  transform: `translateY(calc(100% + ${theme.spacing(3)}))`,

  minWidth: '200px',
  maxWidth: '300px',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.common.white
}))

const DropdownButton = ({ labelText, children }: Props) => {
  const wrapperRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleDropdownButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const handleClickOutside = (event: Event) => {
    event.preventDefault()
    setIsDropdownOpen(false)
  }
  useOnClickOutside(wrapperRef, handleClickOutside)

  return <StyledDropdownButtonWrapper ref={wrapperRef}>
    <StyledDropdownButton isActive={isDropdownOpen} onClick={handleDropdownButtonClick}>
      {labelText}
      <KeyboardArrowDownIcon />
    </StyledDropdownButton>
    {
      isDropdownOpen && <StyledOptionsContainer>
        {children}
      </StyledOptionsContainer>
    }
  </StyledDropdownButtonWrapper>
}

export default DropdownButton
