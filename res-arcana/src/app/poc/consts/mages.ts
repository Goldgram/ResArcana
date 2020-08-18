import { ItemInfo } from '../types';

const DRUID: ItemInfo = {
  id: 'mage-1',
  title: 'Druid',
  type: 'mage',
  collect: { green: 1 },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: { untap: 'creature' },
    },
  ],
};

const SEER: ItemInfo = {
  id: 'mage-2',
  title: 'Seer',
  type: 'mage',
  collect: { blue: 1 },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        reorderTopCards: {
          numberOfCards: 3,
          options: ['player', 'monuments'],
        },
      },
    },
  ],
};

const WITCH: ItemInfo = {
  id: 'mage-3',
  title: 'Witch',
  type: 'mage',
  collect: [{ green: 1 }, { black: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 2,
          },
        },
      },
      reward: { untap: 'any' },
    },
  ],
};

const BEAST_MASTER: ItemInfo = {
  id: 'mage-4',
  title: 'Beastmaster',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            green: 1,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            green: 3,
          },
          target: 'self',
        },
      },
    },
    {
      cost: {
        tap: ['self', 'creature'],
      },
      reward: {
        gain: {
          resources: {
            wild: 2,
            wildRestrictions: ['gold'],
          },
          target: 'player',
        },
      },
    },
  ],
};

const SCHOLAR: ItemInfo = {
  id: 'mage-5',
  title: 'Scholar',
  type: 'mage',
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
      reward: { drawCards: 1 },
    },
  ],
};

const DUELIST: ItemInfo = {
  id: 'mage-6',
  title: 'Duelist',
  type: 'mage',
  collect: [{ red: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            black: 1,
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

const TRANSMUTER: ItemInfo = {
  id: 'mage-7',
  title: 'Transmuter',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 2,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            wild: 3,
            wildRestrictions: ['gold'],
          },
          target: 'player',
        },
      },
    },
  ],
};

const NECROMANCER: ItemInfo = {
  id: 'mage-8',
  title: 'Necromancer',
  type: 'mage',
  collect: [{ black: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            green: 2,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            black: 3,
          },
          target: 'self',
        },
      },
    },
  ],
};

const ALCHEMIST: ItemInfo = {
  id: 'mage-9',
  title: 'Alchemist',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 4,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            gold: 2,
          },
          target: 'player',
        },
      },
    },
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        gain: {
          resources: {
            wild: 1,
            wildRestrictions: ['gold'],
          },
          target: 'player',
        },
      },
    },
  ],
};

const DIVINER: ItemInfo = {
  id: 'mage-10',
  title: 'Diviner',
  type: 'mage',
  collect: [{ red: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        drawAndDiscard: [3, 3],
      },
    },
  ],
};

const DEMONOLOGIST: ItemInfo = {
  id: 'mage-11',
  title: 'Demonologist',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            green: 1,
          },
        },
      },
      reward: { retrieveDiscardedCard: 1 },
    },
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        untap: 'demon',
      },
    },
  ],
};

const HEALER: ItemInfo = {
  id: 'mage-12',
  title: 'Healer',
  type: 'mage',
  collect: [{ blue: 1 }, { green: 1 }],
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

const BARD: ItemInfo = {
  id: 'mage-13',
  title: 'bard',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          creature: ['dragon', 'creature', 'demon'],
        },
      },
      reward: {
        gain: {
          resources: {
            gold: 2,
          },
          target: 'player',
        },
      },
    },
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        gain: {
          resources: {
            wild: 1,
            wildRestrictions: ['gold'],
          },
          target: 'player',
        },
      },
    },
  ],
};

const ARTIFICER: ItemInfo = {
  id: 'mage-14',
  title: 'Artificer',
  type: 'mage',
  discount: {
    type: 'artifact',
    resources: {
      wild: 1,
      wildRestrictions: ['gold'],
    },
  },
};

export const MAGES = [
  DRUID,
  SEER,
  WITCH,
  BEAST_MASTER,
  SCHOLAR,
  DUELIST,
  TRANSMUTER,
  NECROMANCER,
  ALCHEMIST,
  DIVINER,
  DEMONOLOGIST,
  HEALER,
  BARD,
  ARTIFICER,
];
