import { Box, Stack } from '@mui/material'
import React from 'react'
import CustomButton from '../../atoms/Button'
import Theme from '../../../theme'
import CustomIcon from '../../atoms/Icon'

const EndIcon = (
  <CustomIcon src="../assets/images/right_arrow.svg" alt="right_arrow" />
)

const Header = () => {
  return (
    <Stack
      height={'4vh'}
      p={'1.5vh 3vw 1.5vh 2.3vw'}
      direction={'row'}
      bgcolor={Theme.palette.structural[50]}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <CustomButton
        variant={'contained'}
        height={'3vh'}
        bgColor={Theme.palette.structural[100]}
        hoverBgColor={Theme.palette.structural[100]}
        endIcon={EndIcon}
        textColor={Theme.palette.primary[500]}
        textTransform="none"
        fontStyle={Theme.typography.b2}
        borderRadius={Theme.spacing(10)}
      >
        Setup guide
      </CustomButton>
      <Box>
        <CustomIcon src="../assets/images/user.svg" alt="user" />
      </Box>
    </Stack>
  )
}

export default Header
