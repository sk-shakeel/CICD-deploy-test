import { Stack } from '@mui/material'
import React from 'react'
import CustomButton from '../../atoms/Button'
import Theme from '../../../theme'
import { ReviewButton } from '../../../utils/constants'
import CustomIcon from '../../atoms/Icon'

const ButtonImage = () => {
  return (
    <Stack direction={'row'} spacing={Theme.spacing(3)}>
      <CustomButton
        variant="contained"
        bgColor={Theme.palette.structural.white}
        borderRadius={Theme.spacing(1)}
        width={'5vw'}
        height={'4vh'}
        hoverBgColor={Theme.palette.structural.white}
        border={'1px solid' + Theme.palette.stroke[50]}
        textColor={Theme.palette.text.medium}
        textTransform="none"
        shadow
      >
        {ReviewButton}
      </CustomButton>
      <CustomIcon src="../assets/images/spread.svg" alt="spread" />
    </Stack>
  )
}

export default ButtonImage
