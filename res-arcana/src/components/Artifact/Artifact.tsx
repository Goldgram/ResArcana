import React from 'react'
import { ArtifactType, Resources } from '../../types/types'

// import goldIcon from '../../assets/gold.png'
// import wildIcon from '../../assets/wild.png'
// import redIcon from '../../assets/red.png'
// import greenIcon from '../../assets/green.png'
// import blueIcon from '../../assets/blue.png'
// import blackIcon from '../../assets/black.png'

import './Artifact.css'

interface ArtifactProps {
  value: ArtifactType
}

export const Artifact = ({ value }: ArtifactProps) => {
  const {
    cost,
    title,
    creature,
    collect,
    collectSpecial,
    discount,
    actions,
    reactions,
    points,
    expansion,
    startingHand
  } = value
  return (
    <div className='item'>
      <div className='title'>{title}</div>
      <div>
        {cost && <Cost value={cost} />}
        {creature && <div>{JSON.stringify(creature)}</div>}

        {collect && <div>{JSON.stringify(collect)}</div>}
        {collectSpecial && <div>{JSON.stringify(collectSpecial)}</div>}
      </div>

      {discount && <div>{JSON.stringify(discount)}</div>}
      {actions && <div>{JSON.stringify(actions)}</div>}
      {reactions && <div>{JSON.stringify(reactions)}</div>}

      {points && <div>{JSON.stringify(points)}</div>}

      {expansion && <div>{JSON.stringify(expansion)}</div>}
      {startingHand && <div>{JSON.stringify(startingHand)}</div>}
    </div>
  )
}

interface CostProps {
  value: Resources
}

const Cost = ({ value }: CostProps) => {
  if (!Object.keys(value).length) {
    return <div className='cost'>{color(0)}</div>
  }

  const { gold, wild, red, green, blue, black } = value
  return (
    <div className='cost'>
      {gold && color(gold, 'gold')}
      {wild && color(wild, 'wild')}
      {red && color(red, 'red')}
      {green && color(green, 'green')}
      {blue && color(blue, 'blue')}
      {black && color(black, 'black')}
    </div>
  )
}

const color = (value: number, className: string = '') => {
  return <div className={'resource ' + className}>{value}</div>
}
