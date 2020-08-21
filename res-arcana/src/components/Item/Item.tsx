import React, { isValidElement } from 'react'
import { And, Or, ItemType, Creature, Resources } from '../../types/types'
import { getAnd, getOr } from '../../types/functions'

// import goldIcon from '../../assets/gold.png'
// import wildIcon from '../../assets/wild.png'
// import redIcon from '../../assets/red.png'
// import greenIcon from '../../assets/green.png'
// import blueIcon from '../../assets/blue.png'
// import blackIcon from '../../assets/black.png'
import demonSrc from '../../assets/demon.png'
import dragonSrc from '../../assets/dragon.png'
import creatureSrc from '../../assets/creature.png'
import collectIconSrc from '../../assets/collect.png'

import './Item.css'

interface ItemProps {
  value: ItemType
}

export const Item = ({ value }: ItemProps) => {
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
      <div className='imageBox'>
        {cost && costUi(cost)}
        {creature && creaturesUi(creature)}

        {collect && collectUi(collect)}
        {/* {collectSpecial && <div>{JSON.stringify(collectSpecial)}</div>} */}
      </div>

      {discount && <div className='discount'>{JSON.stringify(discount)}</div>}

      {actions &&
        actions.map((a) => <div className='action'>{JSON.stringify(a)}</div>)}

      {reactions &&
        reactions.map((r) => (
          <div className='reaction'>{JSON.stringify(r)}</div>
        ))}

      {points && (
        <div className='points'>
          <div className='circle glowWhiteText'>{points}</div>
        </div>
      )}

      {expansion && <div className='moon'></div>}
      {startingHand && (
        <div className={'startingHand glowWhiteText color' + startingHand}>
          {startingHand}
        </div>
      )}
    </div>
  )
}

const costUi = (value: Resources) => {
  if (!Object.keys(value).length) {
    return <div className='cost'>{colorUi(0)}</div>
  }

  const { gold, wild, red, green, blue, black } = value
  return (
    <div className='cost'>
      {gold && colorUi(gold, 'gold')}
      {wild && colorUi(wild, 'wild')}
      {red && colorUi(red, 'red')}
      {green && colorUi(green, 'green')}
      {blue && colorUi(blue, 'blue')}
      {black && colorUi(black, 'black')}
    </div>
  )
}

const colorUi = (
  value: number,
  className: string = '',
  wildRestrictions?: any
) => {
  return (
    <div className={'resource glowWhiteText ' + className}>
      {value}
      {wildRestrictions && ' W'}
    </div>
  )
}

const creaturesUi = (value: And<Creature>) => {
  const creatures = getAnd<Creature>(value)
  return <div className='creatures'>{creatures.map(creatureUi)}</div>
}

const creatureUi = (value: Creature) => {
  const iconSrc = getCreatureIcon(value)
  return iconSrc && <img className='creature' src={iconSrc} />
}

const getCreatureIcon = (value: Creature) => {
  switch (value) {
    case 'creature':
      return creatureSrc
    case 'dragon':
      return dragonSrc
    case 'demon':
      return demonSrc
    default:
      return undefined
  }
}

const collectUi = (value: Or<Resources>) => {
  const resources = getOr<Resources>(value).map((r, index) => {
    const { gold, red, green, blue, black, wild, wildRestrictions } = r
    return joinAndUi(
      [
        gold && colorUi(gold, 'gold'),
        red && colorUi(red, 'red'),
        green && colorUi(green, 'green'),
        blue && colorUi(blue, 'blue'),
        black && colorUi(black, 'black'),
        wild && colorUi(wild, 'wild', wildRestrictions)
      ].filter(isValidElement)
    )
  })
  return (
    <div className='collect'>
      <img className='collectIcon' src={collectIconSrc} />
      {joinOrUi(resources)}
    </div>
  )
}

const joinUi = (divider: JSX.Element) => (array: JSX.Element[]) => {
  return (
    <>
      {array.reduce((acc: JSX.Element[], ele, index) => {
        return index === 0 ? [ele] : acc.concat(divider, ele)
      }, [])}
    </>
  )
}

const plus = <div className='plus'>+</div>
const slash = <div className='slash'>/</div>
const joinAndUi = joinUi(plus)
const joinOrUi = joinUi(slash)
