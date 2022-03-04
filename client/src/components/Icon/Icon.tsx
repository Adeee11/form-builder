import React from 'react'
import { IconContainer } from '../styles/Container.styled'

const Icon = (props:{iconImg:string}) => {
    const iconImg = props.iconImg
  return (
    <>
    <IconContainer>
          <img src={iconImg} alt="Icon" />
      </IconContainer>
    </>
  )
}

export default Icon
