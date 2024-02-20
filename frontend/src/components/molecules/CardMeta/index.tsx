import { Stack } from '@mui/material'
import React, { SetStateAction } from 'react'
import { CardMetaData } from '../../../utils/constants'
import TypographyComponent from '../../atoms/Typography'
import Theme from '../../../theme'

interface CardMetaProps {
  merchantValue: number
  categoryValue: number
  setOpenCategoryRuleModal?: React.Dispatch<SetStateAction<boolean>>
}
const CardMeta = (props: CardMetaProps) => {
  return (
    <Stack direction={'row'} gap={'5vw'}>
      {CardMetaData.map((item, i) => {
        let value = item.value
        if (i === 1) value = props.merchantValue
        if (i === 2) value = props.categoryValue
        return (
          <Stack
            key={item.key}
            data-testid={item.key}
            direction={'column'}
            alignItems={'flex-start'}
            onClick={() => {
              if (i === 2 && props.setOpenCategoryRuleModal) {
                props.setOpenCategoryRuleModal(true)
              }
            }}
          >
            <TypographyComponent variant="b3" color={Theme.palette.text.high}>
              {item.key}
            </TypographyComponent>
            <TypographyComponent variant="b2" color={item.color}>
              {value}
            </TypographyComponent>
          </Stack>
        )
      })}
    </Stack>
  )
}

export default CardMeta
