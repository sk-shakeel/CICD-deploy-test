import CustomIcon from '../../atoms/Icon'
import Theme from '../../../theme'
import { NavigateFunction } from 'react-router'

export interface NavButton {
  name: string
  isActive: boolean
}

export const handleNavButtonClick = (
  id: string,
  buttons: any[],
  setButtons: React.Dispatch<React.SetStateAction<NavButton[]>>,
  navigate: NavigateFunction
) => {
  const updatedButtons = buttons.map((button) => {
    if (button.name === 'Accounting' || button.name === 'Bill pay') {
      return {
        ...button,
        isActive: button.name === id,
      }
    }
    return button
  })
  setButtons(updatedButtons)
}

export const navButtonEndIcon = (button: NavButton) => {
  if (button.isActive && (button.name === 'Accounting' || 'Bill pay')) {
    return (
      <CustomIcon
        src="../assets/images/chervondownwhite.svg"
        alt="nav button"
      />
    )
  }
  return (
    <CustomIcon src="../assets/images/chervondownblack.svg" alt="nav button" />
  )
}

export const handleNavButtonTextColor = (button: NavButton) => {
  if (button.isActive && (button.name === 'Accounting' || 'Bill pay')) {
    return Theme.palette.structural.white
  }
  return Theme.palette.text.high
}

export const handleNavButtonBgColor = (button: NavButton) => {
  if (button.isActive && (button.name === 'Accounting' || 'Bill pay')) {
    return Theme.palette.primary[500]
  }
  return Theme.palette.structural.white
}
export const handleNavButtonBorderRadius = (button: NavButton) => {
  if (button.isActive && (button.name === 'Accounting' || 'Bill pay')) {
    return Theme.spacing(10)
  }
  return Theme.spacing(0)
}
