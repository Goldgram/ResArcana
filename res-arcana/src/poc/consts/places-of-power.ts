import { PlaceOfPower, PlaceOfPowerSet } from '../types'

const SACRED_GROVE: PlaceOfPower = {
  id: 'place-of-power-1A',
  title: 'Sacred Grove',
  type: 'place-of-power',
  cost: {
    green: 8,
    blue: 4
  },
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: { resources: { blue: 1 } }
      },
      reward: {
        gain: {
          resources: {
            green: 5
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: ['self', 'creature']
      },
      reward: {
        gain: {
          resources: {
            green: 1
          },
          target: 'self'
        }
      }
    }
  ],
  points: 2,
  pointPerResourceOnSelf: 'green'
}

const ALCHEMISTS_TOWER: PlaceOfPower = {
  id: 'place-of-power-1B',
  title: "Alchemist's Tower",
  type: 'place-of-power',
  cost: {
    gold: 3
  },
  collect: {
    wild: 3,
    wildRestrictions: ['gold']
  },
  actions: [
    {
      cost: { discard: { resources: { black: 1, red: 1, blue: 1, green: 1 } } },
      reward: {
        gain: {
          resources: {
            gold: 1
          },
          target: 'self'
        }
      }
    }
  ],
  reactions: [
    {
      type: 'any-life-loss',
      cost: { tap: ['self'] },
      reward: { ignore: true }
    }
  ],
  pointPerResourceOnSelf: 'gold'
}

const one: PlaceOfPowerSet = {
  id: 'place-of-power-1',
  sideA: SACRED_GROVE,
  sideB: ALCHEMISTS_TOWER
}

const CURSED_FORGE: PlaceOfPower = {
  id: 'place-of-power-2A',
  title: 'Cursed Forge',
  type: 'place-of-power',
  cost: {
    red: 6,
    black: 3
  },
  collectSpecial: 'cursed-forge',
  actions: [
    {
      cost: {
        discard: { resources: { red: 2, gold: 1 } }
      },
      reward: {
        gain: {
          resources: {
            gold: 1
          },
          target: 'self'
        }
      }
    }
  ],
  points: 1,
  pointPerResourceOnSelf: 'gold'
}
const DWARVEN_MINES: PlaceOfPower = {
  id: 'place-of-power-2B',
  title: 'Dwarven Mines',
  type: 'place-of-power',
  cost: {
    red: 4,
    green: 2,
    gold: 1
  },
  collect: { gold: 1 },
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: { resources: { red: 5 } }
      },
      reward: {
        gain: {
          resources: {
            gold: 3
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: ['self'],
        discard: { resources: { black: 3, red: 3 } }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'self'
        }
      }
    }
  ],
  pointPerResourceOnSelf: 'gold'
}

const two: PlaceOfPowerSet = {
  id: 'place-of-power-2',
  sideA: CURSED_FORGE,
  sideB: DWARVEN_MINES
}

export const PLACES_OF_POWER: PlaceOfPowerSet[] = [one, two]
