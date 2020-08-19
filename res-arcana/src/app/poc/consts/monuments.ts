import { Monument } from '../types';

const GREAT_PYRAMID: Monument = {
  id: 'monument-1',
  title: 'Great Pyramid',
  type: 'monument',
  cost: { gold: 4 },
  points: 3,
};

const SOLOMONS_MUSE: Monument = {
  id: 'monument-2',
  title: "Solomon's Muse",
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  actions: [
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        gain: {
          resources: {
            gold: 1,
          },
          target: 'player',
        },
      },
    },
  ],
};

const COLOSSUS: Monument = {
  id: 'monument-3',
  title: 'Colossus',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 1,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            gold: 1,
          },
          target: 'self',
        },
      },
    },
  ],
};

const DEMON_WORKSHOP: Monument = {
  id: 'monument-4',
  title: 'Demon Workshop',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  collect: [{ red: 1 }, { black: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            gold: 1,
          },
        },
      },
      reward: {
        untap: 'any',
      },
    },
  ],
};

const ALCHEMICAL_LAB: Monument = {
  id: 'monument-5',
  title: 'Alchemical Lab',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 1,
          },
        },
      },
      reward: {
        gain: {
          sameResourcesAsCost: true,
          target: 'any',
        },
      },
    },
  ],
};

const MAUSOLEUM: Monument = {
  id: 'monument-6',
  title: 'Mausoleum',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  actions: [
    {
      cost: {
        discard: {
          resources: {
            wild: 1,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            black: 1,
          },
          target: 'self',
        },
      },
    },
  ],
};

const HANGING_GARDENS: Monument = {
  id: 'monument-7',
  title: 'hanging Gardens',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  collect: {
    wild: 3,
    wildRestrictions: ['gold'],
  },
};

const LIBRARY: Monument = {
  id: 'monument-8',
  title: 'Library',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  actions: [
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        drawCards: 1,
      },
    },
  ],
};

const ORACLE: Monument = {
  id: 'monument-9',
  title: 'Oracle',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  actions: [
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        reorderTopCards: {
          numberOfCards: 3,
          options: ['player', 'monuments'],
        },
      },
    },
  ],
};

const TEMPLE: Monument = {
  id: 'monument-10',
  title: 'Temple',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        tap: ['self'],
      },
      reward: { ignore: true },
    },
  ],
};

const OBELISK: Monument = {
  id: 'monument-11',
  title: 'Obelisk',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  reactions: [
    {
      type: 'self-bought',
      reward: {
        gain: {
          resources: { wild: 6, wildRestrictions: ['gold'] },
          target: 'player',
        },
      },
    },
  ],
};

const WARRIORS_HALL: Monument = {
  id: 'monument-12',
  title: "Warrior's Hall",
  type: 'monument',
  cost: { gold: 4 },
  collect: {
    red: 1,
  },
  actions: [
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        gain: {
          resources: { red: 1 },
          target: 'player',
        },
        rivalsGainResources: { red: 1 },
      },
    },
  ],
  points: 2,
};

const DARK_CATHEDRAL: Monument = {
  id: 'monument-13',
  title: 'Dark Cathedral',
  type: 'monument',
  cost: { gold: 4 },
  collect: {
    black: 1,
  },
  reactions: [
    {
      type: 'victory-check',
      cost: {
        tap: ['self', 'demon'],
      },
      reward: {
        thisCheckVictoryBonus: 1,
      },
    },
  ],
  points: 2,
};

const GOLDEN_STATUE: Monument = {
  id: 'monument-14',
  title: 'Golden Statue',
  type: 'monument',
  cost: { gold: 4 },
  reactions: [
    {
      type: 'victory-check',
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            gold: 3,
          },
        },
      },
      reward: {
        thisCheckVictoryBonus: 3,
      },
    },
  ],
  points: 1,
};

export const MONUMENTS = [
  GREAT_PYRAMID,
  SOLOMONS_MUSE,
  COLOSSUS,
  DEMON_WORKSHOP,
  ALCHEMICAL_LAB,
  MAUSOLEUM,
  HANGING_GARDENS,
  LIBRARY,
  ORACLE,
  TEMPLE,
  OBELISK,
  WARRIORS_HALL,
  DARK_CATHEDRAL,
  GOLDEN_STATUE,
];
