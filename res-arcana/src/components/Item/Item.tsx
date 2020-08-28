import React, { isValidElement } from 'react'
import * as R from 'ramda'
import {
  And,
  Or,
  ItemType,
  Creature,
  Resources,
  Action,
  ActionCost,
  ActionReward,
  TapType,
  DestroyType,
  DiscardType
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
import thisCompSrc from '../../assets/this-comp.png'
import discardSrc from '../../assets/discard.png'

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
        {points && <div className='points bold glowTextLight'>{points}</div>}

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
    return <div className='cost'>{getColorUi(0)}</div>
  }

  const { gold, wild, red, green, blue, black } = value
  return (
    <div className='cost'>
      {gold && getColorUi(gold, 'gold')}
      {wild && getColorUi(wild, 'wild')}
      {red && getColorUi(red, 'red')}
      {green && getColorUi(green, 'green')}
      {blue && getColorUi(blue, 'blue')}
      {black && getColorUi(black, 'black')}
    </div>
  )
}

const colorUi = (discard: boolean) => (
  value: number | undefined,
  className: string = '',
  wildRestrictions?: any
) => {
  if (R.isNil(value)) return undefined
  return (
    <div className={'resource bold glowTextLight ' + className}>
      {value > 1 && <div className='number'>{value}</div>}
      {wildRestrictions && ' W'}
      {discard && <img className='discard' src={discardSrc} alt='discard' />}
    </div>
  )
}
const getColorUi = colorUi(false)
const discardColorUi = colorUi(true)

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
    return joinAndUi([
      getColorUi(gold, 'gold'),
      getColorUi(blue, 'blue'),
      getColorUi(green, 'green'),
      getColorUi(black, 'black'),
      getColorUi(red, 'red'),
      getColorUi(wild, 'wild', wildRestrictions)
    ])
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

const joinUi = (divider: JSX.Element) => (
  array: (JSX.Element | undefined)[]
) => {
  return (
    <div className='join'>
      {array
        .filter(isValidElement)
        .reduce((acc: JSX.Element[], ele, index) => {
          return index === 0 ? [ele] : acc.concat(divider, ele)
        }, [])
        .map((e, i) => (
          <div key={i}>{e}</div>
        ))}
    </div>
  )
}

const plus = <div className='plus glowTextDark bold'>+</div>
const slash = <div className='slash glowTextDark'>/</div>
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
  const { tap, destroy, discard } = cost

  const tapsElements = tap ? getAnd<TapType>(tap).map(tapUi) : []
  const destroyElements = destroy ? [destroyUi(destroy)] : []
  const discardElements = discard ? [discardUi(discard)] : []

  const costArray = [...tapsElements, ...destroyElements, ...discardElements]
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
  }
}

const destroyUi = (value: DestroyType) => {
  return (
    <div key='destroy-0' className={'destroy ' + value}>
      <div className='bold glowTextDark'>{getDestroyText(value)}</div>
      {value === 'self' && (
        <div className='thisComp'>
          <img className='card' src={cardSrc} alt='this component' />
          <img className='arrow' src={thisCompSrc} alt='this component' />
        </div>
      )}
    </div>
  )
}

const getDestroyText = (value: DestroyType) => {
  switch (value) {
    case 'self':
      return <>Destroy</>
    case 'anotherArtifact':
      return (
        <>
          destroy <i>another</i> of your artifacts
        </>
      )
    case 'anyArtifact':
      return (
        <>
          destroy <i>any</i> one of your artifacts
        </>
      )
    case 'creature':
      return (
        <>
          destroy one of your <i>Creatures</i>
        </>
      )
    case 'dragonOrCreature':
      return (
        <>
          destroy one of your <i>Dragons</i> or <i>Creatures</i>
        </>
      )
  }
}

const discardUi = (value: DiscardType) => {
  const { resources } = value

  const resourcesElements = resources
    ? getDiscardResources(resources)
    : undefined

  const discardArray = [resourcesElements]
  return joinAndUi(discardArray)
}

const getDiscardResources = (resources: Or<Resources>) => {
  const resourcesArray = resources ? getOr<Resources>(resources) : []

  const resourcesElements = resourcesArray.map((r) => {
    const { gold, red, green, blue, black, wild, wildRestrictions } = r
    return joinAndUi([
      discardColorUi(gold, 'gold'),
      discardColorUi(blue, 'blue'),
      discardColorUi(green, 'green'),
      discardColorUi(black, 'black'),
      discardColorUi(red, 'red'),
      discardColorUi(wild, 'wild', wildRestrictions)
    ])
  })
  return joinOrUi(resourcesElements)
}

const actionReward = (reward: ActionReward) => {
  const costArray = [<div>c</div>, <div>d</div>]
  return joinAndUi(costArray)
}
