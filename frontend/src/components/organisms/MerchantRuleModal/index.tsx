import { Box, Modal, Stack, styled } from '@mui/material'
import React, { SetStateAction, useContext } from 'react'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'
import {
  MerchantRuleModalCancelButton,
  MerchantRuleModalCreateRuleButton,
  MerchantRuleModalDropdownCaption,
  MerchantRuleModalHeading,
  MerchantRuleModalText1,
  MerchantRuleModalText2,
} from '../../../utils/constants'
import Dropdown from '../../molecules/Dropdown'
import CustomButton from '../../atoms/Button'
import { createRule } from '../../../utils/functions'
import {
  AccountingLoaderContext,
  MerchantRuleCreateContext,
  RampRuleContext,
} from '../../../App'
import { addMerchantRule } from '../../../utils/services'

const StyledStack = styled(Stack)`
  width: 25vw;
  padding: 1.5vh 1vw;
  border-bottom: 1px solid ${Theme.palette.stroke[100]};
`

interface MerchantRuleModalProps {
  merchantRuleCount: number
  setMerchantRuleCount: {
    (value: SetStateAction<number>): void
    (arg0: number): void
  }
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MerchantRuleModal = (props: MerchantRuleModalProps) => {
  const { rampRule } = useContext(RampRuleContext)
  const { setCreateMerchantRuleModal } = useContext(MerchantRuleCreateContext)
  const { accountingLoader, setAccountingLoader } = useContext(
    AccountingLoaderContext
  )
  console.log({
    merchantName: rampRule.merchantName,
    quickBooksCategoryId: rampRule.id,
  })
  return (
    <Modal open={props.open} onClose={() => props.setOpen(false)}>
      <Box
        display={'block'}
        bgcolor={Theme.palette.structural.white}
        width={'27vw'}
        sx={{
          position: 'absolute',
          top: '30%',
          left: '35%',
        }}
      >
        <StyledStack>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {MerchantRuleModalHeading}
          </TypographyComponent>
        </StyledStack>
        <StyledStack direction={'column'} gap={'1.5vh'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {MerchantRuleModalText1}
            {rampRule.merchantName}
            {MerchantRuleModalText2}
            {rampRule.merchantName}.
          </TypographyComponent>
          <Stack direction={'column'} gap={Theme.spacing(2)}>
            <Dropdown
              onChange={() => {}}
              value={rampRule.label}
              height="3vh"
              fields={[rampRule.label]}
              width="15vw"
            />
            <TypographyComponent variant="c1" color={Theme.palette.accent.red}>
              {MerchantRuleModalDropdownCaption}
            </TypographyComponent>
          </Stack>
        </StyledStack>
        <StyledStack
          gap={'1vw'}
          direction={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <CustomButton
            variant="contained"
            fontStyle={Theme.typography.b2}
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            height={'4vh'}
            border={'1px solid' + Theme.palette.stroke[50]}
            borderRadius={Theme.spacing(1)}
            textColor={Theme.palette.text.medium}
            textTransform="none"
          >
            {MerchantRuleModalCancelButton}
          </CustomButton>
          <CustomButton
            variant="contained"
            fontStyle={Theme.typography.b2}
            bgColor={Theme.palette.primary[500]}
            hoverBgColor={Theme.palette.primary[500]}
            height={'4vh'}
            borderRadius={Theme.spacing(1)}
            textColor={Theme.palette.structural.white}
            textTransform="none"
            onClick={() => {
              createRule(props.merchantRuleCount, props.setMerchantRuleCount)
              addMerchantRule({
                merchantName: rampRule.merchantName,
                quickBooksCategoryId: rampRule.id,
              })
              props.setOpen(false)
              setCreateMerchantRuleModal(false)
              setAccountingLoader(!accountingLoader)
            }}
          >
            {MerchantRuleModalCreateRuleButton}
          </CustomButton>
        </StyledStack>
      </Box>
    </Modal>
  )
}

export default MerchantRuleModal
