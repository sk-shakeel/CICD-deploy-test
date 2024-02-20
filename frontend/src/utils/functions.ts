import { SetStateAction } from 'react'

export const createRule = (
  ruleCount: number,
  setRuleCount: {
    (value: SetStateAction<number>): void
    (arg0: number): void
  }
) => {
  setRuleCount(ruleCount + 1)
}

export const convertStringToDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number)

  const parsedDate = new Date(2000 + year, month - 1, day)

  return parsedDate
}
