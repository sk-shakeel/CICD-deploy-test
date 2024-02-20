import React from 'react'

interface CustomIconProps {
  width?: string
  src?: string
  alt?: string
  height?: string
  onClick?: () => void
  id?: string
}

const CustomIcon = (props: CustomIconProps) => {
  return <img {...props} />
}

export default CustomIcon
