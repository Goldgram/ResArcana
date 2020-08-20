import { Scroll } from '../types'

const AUGURY: Scroll = {
  id: 'scroll-1',
  title: 'Augury',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { blue: 1 } } },
      reward: { drawCards: 1 }
    }
  ],
  expansion: 1
}

const DESTRUCTION: Scroll = {
  id: 'scroll-2',
  title: 'Destruction',
  type: 'scroll',
  actions: [
    {
      cost: { destroy: ['any-artifact'] },
      reward: {
        destroyedArtifactBonus: {
          wild: 1,
          wildRestrictions: ['gold']
        }
      }
    }
  ],
  expansion: 1
}

const DISJUNCTION: Scroll = {
  id: 'scroll-3',
  title: 'Disjunction',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { gold: 1 } } },
      reward: {
        gain: {
          resources: { black: 1, blue: 1, green: 1, red: 1 },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const PROJECTION: Scroll = {
  id: 'scroll-4',
  title: 'Projection',
  type: 'scroll',
  actions: [
    {
      cost: { equalDiscard: 'wild' },
      reward: {
        gain: {
          thirdResourceNumberAsEqualDiscard: {
            gold: 1000
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const REVIVIFY: Scroll = {
  id: 'scroll-5',
  title: 'Revivify',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { black: 1 } } },
      reward: { retrieveDiscardedCard: 1 }
    }
  ],
  expansion: 1
}

const SHIELD: Scroll = {
  id: 'scroll-6',
  title: 'Shield',
  type: 'scroll',
  reactions: [
    {
      type: 'any-life-loss',
      reward: { ignore: true }
    }
  ],
  expansion: 1
}

const TRANSFORM: Scroll = {
  id: 'scroll-7',
  title: 'Transform',
  type: 'scroll',
  actions: [
    {
      cost: {
        equalDiscard: 'wild'
      },
      reward: {
        gain: {
          sameResourceNumberAsEqualDiscard: {
            wild: 1000,
            wildRestrictions: ['gold']
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const VITALITY: Scroll = {
  id: 'scroll-8',
  title: 'Vitality',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { red: 2 } } },
      reward: { untap: 'any' }
    }
  ],
  expansion: 1
}

export const SCROLLS = [
  AUGURY,
  DESTRUCTION,
  DISJUNCTION,
  PROJECTION,
  REVIVIFY,
  SHIELD,
  TRANSFORM,
  VITALITY
]
