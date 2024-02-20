import { Box, Modal, Stack, styled } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import Theme from '../../../theme'
import TypographyComponent from '../../atoms/Typography'
import {
  CancelButton,
  CategoryRuleActive,
  CategoryRuleContent,
  CategoryRuleHeading,
  CategoryRuleRecent,
  CategoryRulesAnswer,
  CategoryRulesHeading,
  CategoryRulesQuestion,
  CreateRulePopupButton,
  SeeAllCategory,
} from '../../../utils/constants'
import LabelPlusInput from '../../molecules/LabelPlusInput'
import CustomIcon from '../../atoms/Icon'
import Dropdown from '../../molecules/Dropdown'
import CustomButton from '../../atoms/Button'
import { createRule } from '../../../utils/functions'
import { addCategoryRule } from '../../../utils/services'

const StyledOuterStack = styled(Stack)`
  width: 30.7vw;
  padding: 1.5vh 1vw;
  border-bottom: 1px solid ${Theme.palette.stroke[100]};
`
const StyledInnerStack = styled(Stack)`
  width: 25vw;
`
interface CategoryRuleModalProps {
  categoriesData: any[]
  categoryRulesData: any[]
  categoruRulesCount: number
  setCategoryRulesCount: {
    (value: SetStateAction<number>): void
    (arg0: number): void
  }
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CategoryRuleModal = (props: CategoryRuleModalProps) => {
  const [categoryRulesActive, setCategoryRulesActive] = useState<any[]>([])
  const [categoryRulesInActive, setCategoryRulesInActive] = useState<any[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    if (props.categoriesData) {
      const data = props.categoryRulesData.map((rule) => {
        const rampCategory = props.categoriesData[0].types.find(
          (type: { id: any }) => type.id === rule.rampCategoryId
        )
        const quickbooksCategory = props.categoriesData[1].types.find(
          (type: { id: any }) => type.id === rule.quickBooksCategoryId
        )
        return {
          rampId: rampCategory.id,
          quickbooksId: quickbooksCategory.id,
          RampCategory: rampCategory.name,
          QuickbooksCategory: quickbooksCategory.name,
        }
      })

      setCategoryRulesActive(data)

      const data1 = props.categoriesData[0].types.filter(
        (type: { name: any }) => {
          const noMatchingItems = data.every(
            (item) => item.RampCategory !== type.name
          )

          return noMatchingItems
        }
      )

      const finalData = data1.map((rule: { id: any; name: any }) => {
        const rampCategory = rule.name

        const quickbooksCategory = [
          'Expense',
          'Advertising',
          'Disposals',
          'Bank charges',
        ]
        return {
          rampCategoryId: rule.id,
          RampCategory: rampCategory,
          QuickbooksCategory: quickbooksCategory,
        }
      })
      setCategoryRulesInActive(finalData)
    }
  }, [props.categoriesData])

  const [quickBookId, setQuickBookId] = useState(0)
  const [rampId, setRampId] = useState(0)
  return (
    <Modal
      open={props.open}
      sx={{ position: 'absolute', top: '12%', left: '35%' }}
      onClose={() => props.setOpen(false)}
    >
      <Box bgcolor={Theme.palette.structural.white} width={'32.7vw'}>
        <StyledOuterStack>
          <TypographyComponent variant="b2" color={Theme.palette.text.high}>
            {CategoryRuleHeading}
          </TypographyComponent>
        </StyledOuterStack>
        <StyledOuterStack
          direction={'column'}
          gap={'2vh'}
          height={'60vh'}
          sx={{ overflowY: 'scroll' }}
        >
          <StyledInnerStack direction={'column'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {CategoryRulesHeading}
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.high}>
              {CategoryRuleContent}
            </TypographyComponent>
          </StyledInnerStack>
          <Stack direction={'column'} gap={'2vh'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {CategoryRuleActive}
            </TypographyComponent>
            {categoryRulesActive.map((rule) => (
              <Stack direction={'row'} key={rule.RampCategory}>
                <LabelPlusInput
                  label={'Ramp Category'}
                  value={rule.RampCategory}
                  color={Theme.palette.text.low}
                />
                <Box marginX={'1vw'} marginTop={'3.8vh'}>
                  <CustomIcon src="../assets/images/light.svg" alt="cat" />
                </Box>
                <Dropdown
                  label="Quickbooks Category"
                  height="3vh"
                  width="14vw"
                  onChange={() => {}}
                  value={rule.QuickbooksCategory}
                  fields={[rule.QuickbooksCategory]}
                />
              </Stack>
            ))}
          </Stack>
          <Stack direction={'column'} gap={'2vh'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {CategoryRuleRecent}
            </TypographyComponent>
            {categoryRulesInActive.map((rule, idx) => (
              <Stack direction={'row'} key={rule.RampCategory}>
                <LabelPlusInput
                  label={'Ramp Category'}
                  value={rule.RampCategory}
                  color={Theme.palette.text.medium}
                />
                <Box marginX={'1vw'} marginTop={'3.8vh'}>
                  <CustomIcon src="../assets/images/light.svg" alt="cat" />
                </Box>
                <Dropdown
                  label="Quickbooks Category"
                  height="3vh"
                  width="14vw"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> }
                  }) => {
                    if (idx === 0 && e.target.value === 'Advertising')
                      setValue(e.target.value)
                    const quick = props.categoriesData[1].types.find(
                      (t: { name: string }) => t.name === 'Advertising'
                    )
                    setQuickBookId(quick.id)
                    setRampId(rule.rampCategoryId)
                  }}
                  placeholder="Quickbooks category"
                  placeholderMargin={-3}
                  value={idx == 0 ? value : ''}
                  fields={rule.QuickbooksCategory}
                  id={idx === 0 ? 'advertising' : 'dropdown'}
                />
              </Stack>
            ))}
          </Stack>
          <Stack direction={'column'} width={'26vw'}>
            <TypographyComponent variant="b2" color={Theme.palette.text.high}>
              {CategoryRulesQuestion}
            </TypographyComponent>
            <TypographyComponent variant="b3" color={Theme.palette.text.medium}>
              {CategoryRulesAnswer}
            </TypographyComponent>
            <Box width={'10vw'} paddingTop={'1vh'}>
              <CustomButton
                variant={'contained'}
                bgColor={Theme.palette.structural.white}
                hoverBgColor={Theme.palette.structural.white}
                fontStyle={Theme.typography.b2}
                textColor={Theme.palette.text.high}
                border={'1px solid' + Theme.palette.stroke[50]}
                textTransform="none"
                shadow={true}
                borderRadius={'4px'}
              >
                {SeeAllCategory}
              </CustomButton>
            </Box>
          </Stack>
        </StyledOuterStack>
        <StyledOuterStack
          direction={'row'}
          gap={'1vw'}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <CustomButton
            borderRadius={'4px'}
            variant={'contained'}
            bgColor={Theme.palette.structural.white}
            hoverBgColor={Theme.palette.structural.white}
            fontStyle={Theme.typography.b2}
            textColor={Theme.palette.text.high}
            border={'1px solid' + Theme.palette.stroke[50]}
            textTransform="none"
            shadow={true}
            width={'5vw'}
          >
            {CancelButton}
          </CustomButton>
          <CustomButton
            variant={'contained'}
            borderRadius={'4px'}
            width={''}
            bgColor={Theme.palette.primary[500]}
            hoverBgColor={Theme.palette.primary[500]}
            fontStyle={Theme.typography.b2}
            textColor={Theme.palette.structural.white}
            textTransform="none"
            onClick={() => {
              if (value.length > 0) {
                createRule(
                  props.categoruRulesCount,
                  props.setCategoryRulesCount
                )
                addCategoryRule({
                  rampCategoryId: rampId,
                  quickBooksCategoryId: quickBookId,
                })
                props.setOpen(false)
              }
            }}
          >
            {CreateRulePopupButton}
          </CustomButton>
        </StyledOuterStack>
      </Box>
    </Modal>
  )
}

export default CategoryRuleModal
