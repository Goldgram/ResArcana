import { ItemInfo } from '../types';

const HORN_OF_PLENTY: ItemInfo = {
  id: 'artifact-1',
  title: 'Horn of Plenty',
  type: 'artifact',
  cost: {
    gold: 2,
  },
  actions: [
    {
      cost: { tap: ['self'] },
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
    {
      cost: { tap: ['self'] },
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

const MERMAID: ItemInfo = {
  id: 'artifact-2',
  title: 'Mermaid',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    green: 2,
    blue: 2,
  },
  collect: {
    blue: 1,
  },
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: [{ blue: 1 }, { green: 1 }, { gold: 1 }],
        },
      },
      reward: {
        gain: {
          sameAsCost: true,
          target: 'any',
        },
      },
    },
  ],
};

const HOMUNCULUS: ItemInfo = {
  id: 'artifact-3',
  title: 'Homunculus',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    green: 1,
  },
  discount: {
    type: 'demon',
    resources: {
      wild: 2,
    },
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gain: {
          resources: {
            wild: 2,
            wildRestrictions: ['gold'],
          },
          target: 'self',
        },
      },
    },
  ],
};

const CHALICE_OF_FIRE: ItemInfo = {
  id: 'artifact-4',
  title: 'Chalice of Fire',
  type: 'artifact',
  cost: {
    gold: 1,
    red: 1,
  },
  collect: {
    red: 2,
  },
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            red: 1,
          },
        },
      },
      reward: {
        untap: 'any',
      },
    },
  ],
};

const CURSED_SKULL: ItemInfo = {
  id: 'artifact-5',
  title: 'Cursed Skull',
  type: 'artifact',
  cost: {
    black: 2,
  },
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
            wild: 3,
            wildRestrictions: ['gold', 'green'],
          },
          target: 'self',
        },
      },
    },
  ],
};

const NIGHTINGALE: ItemInfo = {
  id: 'artifact-6',
  title: 'Nightingale',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    green: 1,
    blue: 1,
  },
  points: 1,
};

const CELESTIAL_HORSE: ItemInfo = {
  id: 'artifact-7',
  title: 'Celestial Horse',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    blue: 2,
    red: 1,
  },
  collect: {
    wild: 2,
    wildRestrictions: ['gold', 'black'],
  },
};

const MAGICAL_SHARD: ItemInfo = {
  id: 'artifact-8',
  title: 'Magical Shard',
  type: 'artifact',
  actions: [
    {
      cost: { tap: ['self'] },
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

const ELEMENTAL_SPRING: ItemInfo = {
  id: 'artifact-9',
  title: 'Elemental Spring',
  type: 'artifact',
  cost: {
    red: 2,
    green: 1,
    blue: 1,
  },
  collect: {
    blue: 1,
    green: 1,
    red: 1,
  },
  reactions: [
    {
      type: 'attack',
      cost: {
        discard: {
          resources: {
            blue: 1,
          },
        },
      },
      reward: { ignore: true },
    },
  ],
};

const HAWK: ItemInfo = {
  id: 'artifact-10',
  title: 'Hawk',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    green: 1,
    blue: 1,
  },
  collect: {
    blue: 1,
  },
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
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            blue: 2,
          },
        },
      },
      reward: {
        drawCards: 1,
      },
    },
  ],
};

const CHALICE_OF_LIFE: ItemInfo = {
  id: 'artifact-11',
  title: 'Chalice of Life',
  type: 'artifact',
  cost: {
    gold: 1,
    green: 1,
    blue: 1,
  },
  collect: {
    blue: 1,
    green: 1,
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            blue: 2,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            blue: 2,
            green: 1,
          },
          target: 'self',
        },
      },
    },
  ],
  reactions: [
    {
      type: 'attack',
      cost: { tap: ['self'] },
      reward: { ignore: true },
    },
  ],
};

const FLAMING_PIT: ItemInfo = {
  id: 'artifact-12',
  title: 'Flaming Pit',
  type: 'artifact',
  cost: {
    red: 2,
  },
  collect: {
    red: 1,
  },
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
            red: 1,
            black: 1,
          },
          target: 'player',
        },
      },
    },
  ],
};

const CURSED_DWARVEN_KING: ItemInfo = {
  id: 'artifact-13',
  title: 'Cursed Dwarven King',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    green: 1,
    black: 1,
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            black: 1,
            red: 1,
            green: 1,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            gold: 2,
          },
          target: 'self',
        },
      },
    },
    {
      cost: {
        tap: ['self', 'dragon'],
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

const DANCING_SWORD: ItemInfo = {
  id: 'artifact-14',
  title: 'Dancing Sword',
  type: 'artifact',
  cost: {
    gold: 1,
    red: 1,
  },
  collect: {
    black: 1,
    red: 1,
  },
  reactions: [
    {
      type: 'attack',
      cost: {
        discard: {
          resources: {
            red: 1,
          },
        },
      },
      reward: {
        ignore: true,
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

const FOUNTAIN_OF_YOUTH: ItemInfo = {
  id: 'artifact-15',
  title: 'Fountain of Youth',
  type: 'artifact',
  cost: {
    blue: 1,
    black: 1,
  },
  collect: {
    green: 1,
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            black: 2,
          },
        },
      },
      reward: {
        gain: {
          resources: {
            blue: 2,
            green: 1,
          },
          target: 'self',
        },
      },
    },
  ],
};

const RING_OF_MIDAS: ItemInfo = {
  id: 'artifact-16',
  title: 'Ring of Midas',
  type: 'artifact',
  cost: {
    green: 1,
    gold: 1,
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            green: 2,
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
    {
      cost: {
        tap: ['self'],
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
  points: 1,
};

const GOLDEN_LION: ItemInfo = {
  id: 'artifact-17',
  title: 'Golden Lion',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    red: 2,
    green: 1,
    blue: 1,
    gold: 1,
  },
  collect: {
    blue: 1,
    green: 1,
    red: 1,
  },
  reactions: [
    {
      type: 'attack',
      cost: {
        tap: ['self'],
      },
      reward: {
        ignore: true,
      },
    },
  ],
  points: 1,
};

const PRISMATIC_DRAGON: ItemInfo = {
  id: 'artifact-18',
  title: 'Prismatic Dragon',
  type: 'artifact',
  creature: ['dragon'],
  cost: {
    red: 2,
    green: 2,
    blue: 2,
  },
  collect: {
    wild: 1,
    wildRestrictions: ['gold', 'black'],
  },
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
        gain: {
          resources: {
            wild: 4,
            wildRestrictions: ['gold'],
          },
          target: 'self',
        },
      },
    },
  ],
  points: 1,
};

const CHAOS_IMP: ItemInfo = {
  id: 'artifact-19',
  title: 'Chaos Imp',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    red: 1,
    black: 1,
  },
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
        untap: 'demon',
      },
    },
    {
      cost: {
        discard: {
          resources: {
            black: 1,
            red: 1,
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

const DWARVEN_PICKAXE: ItemInfo = {
  id: 'artifact-20',
  title: 'Dwarven Pickaxe',
  type: 'artifact',
  cost: {
    red: 1,
  },
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            red: 1,
          },
        },
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

const SHADOWY_FIGURE: ItemInfo = {
  id: 'artifact-21',
  title: 'Shadowy Figure',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    blue: 2,
    black: 2,
  },
  collect: {
    blue: 1,
  },
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            blue: 1,
          },
        },
      },
      reward: {
        drawAndDiscard: [2, 1],
      },
    },
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
            blue: 3,
          },
          target: 'player',
        },
      },
    },
  ],
};

export const ARTIFACTS = [
  HORN_OF_PLENTY,
  MERMAID,
  HOMUNCULUS,
  CHALICE_OF_FIRE,
  CURSED_SKULL,
  NIGHTINGALE,
  CELESTIAL_HORSE,
  MAGICAL_SHARD,
  ELEMENTAL_SPRING,
  HAWK,
  CHALICE_OF_LIFE,
  FLAMING_PIT,
  CURSED_DWARVEN_KING,
  DANCING_SWORD,
  FOUNTAIN_OF_YOUTH,
  RING_OF_MIDAS,
  GOLDEN_LION,
  PRISMATIC_DRAGON,
  CHAOS_IMP,
  DWARVEN_PICKAXE,
  SHADOWY_FIGURE,
];
