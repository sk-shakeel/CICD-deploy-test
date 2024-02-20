import { SetStateAction } from 'react'

export const createRule = (
  setOpen: {
    (value: SetStateAction<boolean>): void
    (arg0: boolean): void
  },
  setFlag: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
  setModal?: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
  setOpen(false)
  setFlag(false)
  if (setModal != null) setModal(true)
}
