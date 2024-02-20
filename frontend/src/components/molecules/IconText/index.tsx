import { Stack } from '@mui/material'
import React from 'react'
import CustomIcon from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'
import { AllCardIcon, AllCardIconAlt, AllCards } from '../../../utils/constants'

const IconText = () => {
  return (
    <Stack
      px={'1vw'}
      direction={'row'}
      border={`1px solid ${Theme.palette.stroke[50]}`}
      bgcolor={Theme.palette.structural.white}
      gap={'0.5vw'}
      height={'3vh'}
      width={'7vw'}
      alignItems={'center'}
      borderRadius={Theme.spacing(4)}
    >
      <CustomIcon src={AllCardIcon} alt={AllCardIconAlt} />
      <TypographyComponent variant={'c2'} color={Theme.palette.text.medium}>
        {AllCards}
      </TypographyComponent>
    </Stack>
  )
}

export default IconText
