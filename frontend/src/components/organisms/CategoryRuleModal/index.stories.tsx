import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import CategoryRuleModal from '.'
import { Categories } from '../../../utils/constants'

export default {
  title: 'Organisms/CategoryRuleModal',
  component: CategoryRuleModal,
} as Meta

const Template: Story<typeof CategoryRuleModal> = (args) => {
  return <CategoryRuleModal {...args} />
}

const CategoriesRules = [
  {
    id: 1,
    rampCategoryId: 1,
    quickBooksCategoryId: 101,
  },
  {
    id: 2,
    rampCategoryId: 2,
    quickBooksCategoryId: 102,
  },
  {
    id: 3,
    rampCategoryId: 3,
    quickBooksCategoryId: 103,
  },
]

export const Default = Template.bind({})
Default.args = {
  open: true,
  categoruRulesCount: 0,
  setCategoryRulesCount: () => {},
  setOpen: () => {},
  categoriesData: Categories,
  categoryRulesData: CategoriesRules,
}
