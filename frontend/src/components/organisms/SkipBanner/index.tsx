import { Box, Modal, Stack } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../../../theme'
import CustomIcon from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'
import {
  SaveBannerButton,
  SaveBannerDescription,
  SaveBannerTitle,
} from '../../../utils/constants'
import CustomButton from '../../atoms/Button'

const SkipBanner = () => {
  const [open, setOpen] = useState(true)
  return (
    <Modal open={open} sx={{ position: 'absolute', top: '45%', left: '10%' }}>
      <Stack
        bgcolor={Theme.palette.structural.white}
        width={'27vw'}
        direction={'column'}
        p={'1.5vh 1vw'}
        borderRadius={'4px'}
        border={'1px solid' + Theme.palette.stroke.border}
        gap={'2vh'}
      >
        <Stack direction={'row'} gap={'1vw'} alignItems={'baseline'}>
          <CustomIcon src="../assets/images/info.svg" alt="info" />
          <Stack direction={'column'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {SaveBannerTitle}
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.low}>
              {SaveBannerDescription}
            </TypographyComponent>
          </Stack>
        </Stack>
        <Box paddingLeft={'1.7vw'}>
          <CustomButton
            variant="contained"
            bgColor={Theme.palette.structural.white}
            textColor={Theme.palette.text.medium}
            border={'1px solid ' + Theme.palette.stroke[50]}
            textTransform="none"
            shadow={true}
            hoverBgColor={Theme.palette.structural.white}
            width={'8vw'}
            onClick={() => {
              setOpen(false)
            }}
          >
            {SaveBannerButton}
          </CustomButton>
        </Box>
      </Stack>
    </Modal>
  )
}

export default SkipBanner
