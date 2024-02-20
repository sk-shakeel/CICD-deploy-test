import { Box, Modal, Stack } from '@mui/material'
import React, { SetStateAction, useContext, useState } from 'react'
import CustomIcon from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'
import {
  CreateRulePopupButton,
  CreateRulePopupDescription,
  CreateRulePopupHeading,
} from '../../../utils/constants'
import CustomButton from '../../atoms/Button'
import { createRule } from './utils'
import { MerchantRuleCreateContext, RampRuleContext } from '../../../App'

interface CreateRulePopupProps {
  setFlag: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
}

const CreateRulePopup = (props: CreateRulePopupProps) => {
  const [open, setOpen] = useState(true)
  const { setCreateMerchantRuleModal } = useContext(MerchantRuleCreateContext)
  const { rampRule } = useContext(RampRuleContext)
  return (
    <Modal
      open={open}
      sx={{ position: 'absolute', top: '80vh', left: '80vw' }}
      hideBackdrop
    >
      <Stack
        width={'17vw'}
        p={'1.5vh 1vw'}
        bgcolor={Theme.palette.structural.white}
        gap={'2vh'}
        border={'1px solid' + Theme.palette.stroke[50]}
        direction={'column'}
        borderRadius={Theme.spacing(1)}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'baseline'}
          gap={Theme.spacing(3)}
        >
          <CustomIcon src="../assets/images/info.svg" alt="info" />
          <Stack direction={'column'} minWidth={'12vw'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {CreateRulePopupHeading}
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.low}>
              Save "{rampRule.label}" {CreateRulePopupDescription}
              {rampRule.merchantName}.
            </TypographyComponent>
          </Stack>
          <CustomIcon src="../assets/images/cross.svg" alt="cross" />
        </Stack>
        <Box paddingLeft={'1.5vw'}>
          <CustomButton
            variant={'contained'}
            border={'1px solid' + Theme.palette.stroke[50]}
            borderRadius={Theme.spacing(1)}
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            fontStyle={Theme.typography.b2}
            textColor={Theme.palette.text.medium}
            height={'3.5vh'}
            textTransform="none"
            onClick={() =>
              createRule(setOpen, props.setFlag, setCreateMerchantRuleModal)
            }
            shadow={true}
          >
            {CreateRulePopupButton}
          </CustomButton>
        </Box>
      </Stack>
    </Modal>
  )
}

export default CreateRulePopup
