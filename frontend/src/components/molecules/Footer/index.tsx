import { Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'
import {
  FooterNextButton,
  FooterPreviousButton,
  FooterResultText,
} from '../../../utils/constants'
import CustomButton from '../../atoms/Button'

interface FooterProps {
  value: number
}
const Footer = (props: FooterProps) => {
  return (
    <Stack
      direction={'row'}
      p={'1vh 2.5vw 1vh 2.5vw'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <span>
        <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
          {props.value}
        </TypographyComponent>
        <TypographyComponent variant="b3" color={Theme.palette.text.high}>
          {' ' + FooterResultText}
        </TypographyComponent>
      </span>

      <Stack gap={Theme.spacing(2)} direction={'row'}>
        <CustomButton
          variant="contained"
          bgColor={Theme.palette.structural.white}
          fontStyle={Theme.typography.b2}
          borderRadius={Theme.spacing(1)}
          hoverBgColor={Theme.palette.structural.white}
          textColor={Theme.palette.text.low}
          textTransform="none"
          border={'1px solid' + Theme.palette.stroke[50]}
          width={'5vw'}
          height={'4vh'}
        >
          {FooterPreviousButton}
        </CustomButton>
        <CustomButton
          variant="contained"
          borderRadius={Theme.spacing(1)}
          textColor={Theme.palette.text.low}
          bgColor={Theme.palette.structural.white}
          hoverBgColor={Theme.palette.structural.white}
          border={'1px solid' + Theme.palette.stroke[50]}
          fontStyle={Theme.typography.b2}
          textTransform="none"
          width={'4vw'}
          height={'4vh'}
        >
          {FooterNextButton}
        </CustomButton>
      </Stack>
    </Stack>
  )
}

export default Footer
