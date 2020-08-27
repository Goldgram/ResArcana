import React, { isValidElement } from 'react'
import {
  And,
  Or,
  ItemType,
  Creature,
  Resources,
  Action,
  ActionCost,
  ActionReward,
  TapType
} from '../../types/types'
import { getAnd, getOr } from '../../types/functions'

import demonSrc from '../../assets/demon.png'
import dragonSrc from '../../assets/dragon.png'
import creatureSrc from '../../assets/creature.png'
import collectIconSrc from '../../assets/collect.png'
import actionArrowSrc from '../../assets/action-arrow.png'
import cardSrc from '../../assets/card.png'
import anySrc from '../../assets/any-comp.png'
import tapSrc from '../../assets/tap.png'

import './Item.scss'

interface ItemProps {
  value: ItemType
}

export const Item = ({ value }: ItemProps) => {
  const {
    cost,
    title,
    creature,
    collect,
    // collectSpecial,
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

      {actions && actionsUi(actions)}

      {reactions &&
        reactions.map((r, index) => (
          <div key={index} className='reaction'>
            {JSON.stringify(r)}
          </div>
        ))}
      <div className='footer'>
        {points && <div className='points bold glowTextWhite'>{points}</div>}

        {expansion && <div className='moon'></div>}

        {startingHand && (
          <div className={'startingHand color' + startingHand}>
            {startingHand}
          </div>
        )}
      </div>
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
    <div className={'resource bold glowTextWhite ' + className}>
      {value > 1 && <div className='resourceNumber'>{value}</div>}
      {wildRestrictions && ' W'}
    </div>
  )
}

const creaturesUi = (value: And<Creature>) => {
  const creatures = getAnd<Creature>(value)
  return <div className='creatures'>{creatures.map(creatureUi)}</div>
}

const creatureUi = (value: Creature, index: number) => {
  const iconSrc = getCreatureIcon(value)
  return (
    <img
      key={'creature-' + index}
      className='creature'
      src={iconSrc}
      alt={value}
    />
  )
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
        blue && colorUi(blue, 'blue'),
        green && colorUi(green, 'green'),
        black && colorUi(black, 'black'),
        red && colorUi(red, 'red'),
        wild && colorUi(wild, 'wild', wildRestrictions)
      ].filter(isValidElement)
    )
  })
  return (
    <div className='collect'>
      <div className='collectContent'>
        <img className='collectIcon' src={collectIconSrc} alt='collect' />
        {joinOrUi(resources)}
      </div>
    </div>
  )
}

const joinUi = (divider: JSX.Element) => (array: JSX.Element[]) => {
  return (
    <div className='join'>
      {array
        .reduce((acc: JSX.Element[], ele, index) => {
          return index === 0 ? [ele] : acc.concat(divider, ele)
        }, [])
        .map((e, i) => (
          <div key={i}>{e}</div>
        ))}
    </div>
  )
}

const plus = <div className='plus glowTextBlack'>+</div>
const slash = <div className='slash glowTextBlack'>/</div>
const joinAndUi = joinUi(plus)
const joinOrUi = joinUi(slash)

const actionsUi = (actions: Action[]) => {
  return actions.map((a, index) => {
    const { cost, reward } = a
    return (
      <div key={index} className='action'>
        {actionCost(cost)}
        <img className='actionArrow' src={actionArrowSrc} alt='action arrow' />
        {actionReward(reward)}
      </div>
    )
  })
}

const actionCost = (cost: ActionCost) => {
  const { tap } = cost
  const taps = tap ? getAnd<TapType>(tap) : []

  const costArray = [...taps.map(tapUi)]
  return joinAndUi(costArray)
}

const tapUi = (value: TapType, index: number) => {
  const imgSrc = getTapSrc(value)
  return (
    <div key={'tap-' + index} className={'tap ' + value}>
      <img className='image' src={imgSrc} alt={value} />
      <img className='tapArrow' src={tapSrc} alt={value} />
    </div>
  )
}

const getTapSrc = (value: TapType) => {
  switch (value) {
    case 'creature':
      return creatureSrc
    case 'dragon':
      return dragonSrc
    case 'demon':
      return demonSrc
    case 'self':
      return cardSrc
    case 'any':
      return anySrc
    case 'allPlayerDemons':
      return demonSrc // TODO
  }
}

const actionReward = (reward: ActionReward) => {
  const costArray = [<div>c</div>, <div>d</div>]
  return joinAndUi(costArray)
}
