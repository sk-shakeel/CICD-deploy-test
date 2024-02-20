import React, { useContext } from 'react'
import CustomButton from '../../atoms/Button'
import { Box, Stack } from '@mui/material'
import { NavLastButton } from '../../../utils/constants'
import Theme from '../../../theme'
import {
  handleNavButtonBgColor,
  handleNavButtonBorderRadius,
  handleNavButtonClick,
  handleNavButtonTextColor,
  navButtonEndIcon,
} from './utils'
import { useNavigate } from 'react-router-dom'
import { NavButtonContext } from '../../../App'

const Navbar = () => {
  const { navButton, setNavButton } = useContext(NavButtonContext)
  const navigate = useNavigate()
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      minHeight={'5vh'}
      px={'2vw'}
      bgcolor={Theme.palette.structural.white}
    >
      <Stack direction={'row'} gap={'1vw'}>
        {navButton.map((button) => (
          <CustomButton
            key={button.name}
            variant={'contained'}
            id={button.name}
            height={'2.5vh'}
            fontStyle={Theme.typography.b2}
            onClick={() => {
              handleNavButtonClick(
                button.name,
                navButton,
                setNavButton,
                navigate
              )
              if (button.name === 'Accounting') navigate('/accounting')
              else if (button.name === 'Bill pay') navigate('/payments')
            }}
            textColor={handleNavButtonTextColor(button)}
            bgColor={handleNavButtonBgColor(button)}
            hoverBgColor={handleNavButtonBgColor(button)}
            endIcon={navButtonEndIcon(button)}
            borderRadius={handleNavButtonBorderRadius(button)}
            textTransform="none"
          >
            {button.name}
          </CustomButton>
        ))}
      </Stack>
      <CustomButton
        id={NavLastButton}
        variant="contained"
        bgColor={Theme.palette.structural.white}
        hoverBgColor={Theme.palette.structural.white}
        endIcon={navButtonEndIcon({ name: NavLastButton, isActive: false })}
        textColor={Theme.palette.text.high}
        textTransform="none"
      >
        {NavLastButton}
      </CustomButton>
    </Box>
  )
}

export default Navbar
