import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <polygon
        fill="black"
        points="400 464 48 464 48 104 240 104 240 72 16 72 16 496 432 496 432 272 400 272 400 464"
      />
      <polygon
        fill="black"
        points="304 16 304 48 441.373 48 188.687 300.687 211.313 323.313 464 70.627 464 208 496 208 496 16 304 16"
      />
    </Svg>
  )
}

export default Icon
