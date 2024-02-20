import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const searchRamp = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setValue: { (value: SetStateAction<string>): void; (arg0: any): void },
  setFlag: Dispatch<SetStateAction<boolean>>,
  tableRows: any[],
  setTableRows: Dispatch<SetStateAction<any[]>>,
  setChip: Dispatch<SetStateAction<boolean>>
) => {
  setValue(e.target.value)
  const filteredRows = tableRows.filter(
    (row) => row.meta.brand.toLowerCase() === e.target.value.toLowerCase()
  )
  if (filteredRows.length > 0) {
    setFlag(true)
  } else {
    setFlag(false)
    setChip(false)
    setTableRows(tableRows)
  }
}

export const search = (
  searchValue: string,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setSearchValue: Dispatch<SetStateAction<string>>,
  tableRows: any[],
  setTableRows: Dispatch<SetStateAction<any[]>>,
  setChip: Dispatch<SetStateAction<boolean>>
) => {
  setSearchValue(searchValue)
  const filteredRows = tableRows.filter(
    (row) => row.meta.brand.toLowerCase() === searchValue.toLowerCase()
  )
  setTableRows(filteredRows)
  setChip(true)
  setOpen(false)
}

export const selectQuickBook = (
  e: any,
  categories: any,
  setValue: Dispatch<SetStateAction<string>>,
  setRamp: {
    (value: SetStateAction<{ id: number; label: string }>): void
    (arg0: any): void
  },
  merchantName: any
) => {
  const rampTypes = categories[1].types
  const category = rampTypes.find(
    (category: { name: any }) => category.name === e.target.value
  )
  setValue(e.target.value)
  setRamp({
    id: category.id,
    label: e.target.value,
    merchantName: merchantName,
  })
}
