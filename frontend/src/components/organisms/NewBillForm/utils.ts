import { Dispatch, SetStateAction } from 'react'

export const changeInput = (
  value: SetStateAction<string>,
  setState: {
    (value: SetStateAction<string>): void
    (arg0: SetStateAction<string>): void
  },
  id?: number,
  setAmountdetails?: Dispatch<SetStateAction<AmountDetailsType[]>> | undefined
) => {
  setState(value)
  if (id && setAmountdetails) {
    setAmountdetails((prevAmountDetails) => {
      const updatedAmountDetails = [...prevAmountDetails]
      const index = prevAmountDetails.findIndex((item) => item.id === id)
      updatedAmountDetails[index] = {
        ...updatedAmountDetails[index],
        description: String(value),
      }
      return updatedAmountDetails
    })
  }
}

const validateDate = (date: string, value: string) => {
  if (
    (date.length === 1 && parseInt(date) <= 3) ||
    (date.length === 4 && parseInt(date.substring(3)) <= 1) ||
    (date.length === 7 && parseInt(date.substring(6)) <= 2) ||
    (date.length === 8 && parseInt(date.substring(6)) <= 23) ||
    (date.length === 2 && parseInt(date) <= 31) ||
    (date.length === 5 && parseInt(date.substring(3)) <= 12)
  ) {
    return true
  }
  return false
}

export const changeDate = (
  date: string,
  value: string,
  setDate: (value: string) => void
) => {
  if (validateDate(date, value)) {
    let x = ''
    if (date.length === 2 || date.length === 5) {
      x = '/'
    }
    setDate(date + x)
  } else if (date === '') {
    setDate('')
  } else if (
    date.length === 3 ||
    date.length === 6 ||
    (date.length === 2 && value.length === 3) ||
    (date.length === 5 && value.length === 6)
  ) {
    setDate(date.slice(0, -1))
  }
}

export const dropdownChange = (
  value: any,
  setValue: Dispatch<SetStateAction<string>>,
  label: string,
  id: number,
  setAmountDetails: {
    (value: SetStateAction<AmountDetailsType[]>): void
    (value: SetStateAction<AmountDetailsType[]>): void
  }
) => {
  setValue(value)
  if (label === 'category') {
    setAmountDetails((prevAmountDetails) => {
      const updatedAmountDetails = [...prevAmountDetails]
      const index = prevAmountDetails.findIndex((item) => item.id === id)
      updatedAmountDetails[index] = {
        ...updatedAmountDetails[index],
        category: value,
      }
      return updatedAmountDetails
    })
  } else if (label === 'classType') {
    setAmountDetails((prevAmountDetails) => {
      const updatedAmountDetails = [...prevAmountDetails]
      const index = prevAmountDetails.findIndex((item) => item.id === id)
      updatedAmountDetails[index] = {
        ...updatedAmountDetails[index],
        classType: value,
      }
      return updatedAmountDetails
    })
  } else if (label === 'job') {
    setAmountDetails((prevAmountDetails) => {
      const updatedAmountDetails = [...prevAmountDetails]
      const index = prevAmountDetails.findIndex((item) => item.id === id)
      updatedAmountDetails[index] = {
        ...updatedAmountDetails[index],
        job: value,
      }
      return updatedAmountDetails
    })
  }
}

export const changeAmount = (
  value: string,
  setValue: { (value: SetStateAction<string>): void; (arg0: any): void },
  id: number,
  setAmountDetails: Dispatch<SetStateAction<AmountDetailsType[]>>
) => {
  if (!isNaN(Number(value))) {
    setValue(value)
    setAmountDetails((prevAmountDetails) => {
      const updatedAmountDetails = [...prevAmountDetails]
      const index = prevAmountDetails.findIndex((item) => item.id === id)
      updatedAmountDetails[index] = {
        ...updatedAmountDetails[index],
        amount: value,
      }
      return updatedAmountDetails
    })
  }
}

export interface AmountDetailsType {
  id: number
  amount: string
  description: string
  category: string
  classType: string
  job: string
}

export const deleteAmountDetails = (
  id: number,
  setAmountDetails: Dispatch<SetStateAction<AmountDetailsType[]>>,
  length: number
) => {
  if (length > 1) {
    setAmountDetails((prevAmountDetails) => {
      const updatedAmountDetails = prevAmountDetails.filter(
        (detail) => detail.id !== id
      )
      return updatedAmountDetails
    })
  }
}

export const addNewAmountDetails = (
  amountdetails: AmountDetailsType[],
  setAmountDetails: Dispatch<
    SetStateAction<
      {
        id: number
        amount: string
        description: string
        category: string
        classType: string
        job: string
      }[]
    >
  >
) => {
  const newId = amountdetails[amountdetails.length - 1].id + 1

  const newAmountDetail = {
    id: newId,
    amount: '',
    description: '',
    category: '',
    classType: '',
    job: '',
  }

  setAmountDetails((prevAmountDetails) => [
    ...prevAmountDetails,
    newAmountDetail,
  ])
}

export const selectPayment = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>
) => {
  setValue(value)
}
