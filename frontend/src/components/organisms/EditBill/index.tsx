import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import { NewBillFormHeading, OneLastLook } from '../../../utils/constants'
import Theme from '../../../theme'
import LabelPlusInput from '../../molecules/LabelPlusInput'
import CustomIcon from '../../atoms/Icon'
import CustomButton from '../../atoms/Button'

const StyledStack = styled(Stack)`
  padding: 0.5vh 0.4vw;
  width: 23vw;
`

interface EditBillProps {
  amount: number
  company: string
  payment: string
  scheduledDate: string
  arrivalDate: string
  createBill?: Function
  editClick?: Function
}

const EditBill = (props: EditBillProps) => {
  return (
    <Box width={'23vw'} bgcolor={Theme.palette.structural[50]}>
      <StyledStack
        direction={'column'}
        gap={'2.5vh'}
        height={'52vh'}
        sx={{
          overflowY: 'scroll',
        }}
      >
        <TypographyComponent variant="h1" color={Theme.palette.text.high}>
          {NewBillFormHeading}
        </TypographyComponent>

        <Stack direction={'column'} gap={'1vh'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
            {OneLastLook}
          </TypographyComponent>
          <Stack direction={'row'}>
            <TypographyComponent variant="b3" color={Theme.palette.text.medium}>
              Pay&nbsp;
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.high}>
              <strong>${props.amount}</strong>&nbsp;
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.medium}>
              to&nbsp;
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.high}>
              <strong>{props.company}</strong>
            </TypographyComponent>
          </Stack>
        </Stack>
        <LabelPlusInput
          label={'Payment method'}
          color={Theme.palette.text.medium}
          borderradius={Theme.spacing(2)}
          value={props.payment}
          width="20vw"
        />
        <Stack direction={'column'} gap={'6px'}>
          <LabelPlusInput
            label={'Scheduled date'}
            color={Theme.palette.text.medium}
            borderradius={Theme.spacing(2)}
            value={props.scheduledDate}
            width="20vw"
          />
          <Stack direction={'row'}>
            <TypographyComponent variant="c2" color={Theme.palette.text.low}>
              Estimated arrival&nbsp;
            </TypographyComponent>
            <TypographyComponent variant="c1" color={Theme.palette.text.medium}>
              {props.arrivalDate}
            </TypographyComponent>
          </Stack>
        </Stack>
        <Stack direction={'column'} gap={'6px'}>
          <LabelPlusInput
            label={'Send to'}
            color={Theme.palette.text.medium}
            borderradius={Theme.spacing(2)}
            value={props.company + '8847'}
            width="20vw"
          />
          <Stack direction={'row'}>
            <TypographyComponent variant="c2" color={Theme.palette.text.low}>
              Added by&nbsp;
            </TypographyComponent>
            <TypographyComponent variant="c1" color={Theme.palette.text.medium}>
              James Smith
            </TypographyComponent>
          </Stack>
        </Stack>
        <Stack direction={'column'} gap={'6px'}>
          <LabelPlusInput
            label={'Withdrawl from'}
            color={Theme.palette.text.medium}
            borderradius={Theme.spacing(2)}
            value={'Manual Accounnt(1873)'}
            width="20vw"
          />
          <Stack direction={'row'}>
            <TypographyComponent variant="c2" color={Theme.palette.text.low}>
              Saving account -&nbsp;
            </TypographyComponent>
            <TypographyComponent variant="c1" color={Theme.palette.text.medium}>
              $477,583.09
            </TypographyComponent>
          </Stack>
        </Stack>
        <Stack gap={'1vh'}>
          <TypographyComponent variant="b2" color={Theme.palette.text.medium}>
            To be approved by
          </TypographyComponent>
          <Stack
            width={'18vw'}
            direction={'row'}
            px={'1vw'}
            bgcolor={Theme.palette.structural.white}
            height={'5vh'}
            border={'1px solid' + Theme.palette.stroke[50]}
            alignItems={'center'}
            justifyContent={'flex-start'}
            gap={'1vw'}
          >
            <CustomIcon src="../assets/images/success.svg" alt="check" />
            <TypographyComponent
              variant="b2"
              color={Theme.palette.accent.green100}
            >
              Auto approved
            </TypographyComponent>
            <CustomIcon
              src="../assets/images/info1.svg"
              alt="info"
              height="40%"
            />
          </Stack>
        </Stack>
      </StyledStack>
      <Stack
        direction={'row'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        p={'1vh 3vw 1vh 1vw'}
        gap={'1vw'}
      >
        <CustomButton
          variant={'contained'}
          bgColor={Theme.palette.structural.white}
          hoverBgColor={Theme.palette.structural.white}
          border={'1px solid' + Theme.palette.stroke[50]}
          shadow
          textTransform="none"
          width={'2.5vw'}
          textColor={Theme.palette.text.medium}
          height={'4vh'}
          borderRadius={'8px'}
          onClick={props.editClick}
        >
          Edit
        </CustomButton>
        <CustomButton
          variant={'contained'}
          bgColor={Theme.palette.primary[500]}
          hoverBgColor={Theme.palette.primary[500]}
          border={'1px solid' + Theme.palette.stroke[50]}
          textTransform="none"
          textColor={Theme.palette.structural.white}
          width={'7vw'}
          height={'4vh'}
          borderRadius={'8px'}
          onClick={props.createBill}
        >
          Create bill
        </CustomButton>
      </Stack>
    </Box>
  )
}

export default EditBill
