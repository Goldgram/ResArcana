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
      type: 'any-life-loss',
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
      type: 'any-life-loss',
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
      type: 'any-life-loss',
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
      type: 'any-life-loss',
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

const TREE_OF_LIFE: ItemInfo = {
  id: 'artifact-22',
  title: 'Tree of Life',
  type: 'artifact',
  cost: {
    wild: 2,
    green: 1,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gain: {
          resources: { green: 3 },
          target: 'player',
        },
        rivalsGainResources: { green: 1 },
      },
    },
  ],
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        discard: {
          resources: {
            green: 1,
          },
        },
      },
      reward: {
        ignore: true,
      },
    },
  ],
};

const HAND_OF_GLORY: ItemInfo = {
  id: 'artifact-23',
  title: 'Hand of Glory',
  type: 'artifact',
  cost: {
    green: 1,
    black: 1,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gain: {
          resources: { black: 2 },
          target: 'player',
        },
        rivalsGainResources: { black: 1 },
      },
    },
  ],
};

const JEWELED_STATUETTE: ItemInfo = {
  id: 'artifact-24',
  title: 'Jeweled Statuette',
  type: 'artifact',
  cost: {
    black: 2,
    gold: 1,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gain: {
          resources: { black: 3 },
          target: 'player',
        },
        rivalsGainResources: { black: 1 },
      },
    },
    {
      cost: { destroy: 'self' },
      reward: {
        gain: {
          resources: { gold: 2, red: 1 },
          target: 'player',
        },
      },
    },
  ],
  points: 1,
};

const FIRE_DEMON: ItemInfo = {
  id: 'artifact-25',
  title: 'Fire Demon',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    red: 2,
    black: 2,
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
            red: 1,
          },
        },
      },
      reward: {
        attack: {
          value: 2,
        },
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
          resources: { red: 3 },
          target: 'player',
        },
      },
    },
  ],
};

const SEA_SERPENT: ItemInfo = {
  id: 'artifact-26',
  title: 'Sea Serpent',
  type: 'artifact',
  creature: ['dragon', 'creature'],
  cost: {
    blue: 6,
    green: 3,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: 'artifact',
        },
      },
    },
  ],
  points: 1,
};

const WIND_DRAGON: ItemInfo = {
  id: 'artifact-27',
  title: 'Wind Dragon',
  type: 'artifact',
  creature: ['dragon'],
  cost: {
    blue: 4,
    wild: 4,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: 'card',
        },
      },
    },
  ],
  points: 1,
};

const EARTH_DRAGON: ItemInfo = {
  id: 'artifact-28',
  title: 'Earth Dragon',
  type: 'artifact',
  creature: ['dragon'],
  cost: {
    red: 4,
    green: 3,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { gold: 1 },
        },
      },
    },
  ],
  points: 1,
};

const FIRE_DRAGON: ItemInfo = {
  id: 'artifact-29',
  title: 'Fire Dragon',
  type: 'artifact',
  creature: ['dragon'],
  cost: {
    red: 6,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { blue: 1 },
        },
      },
    },
  ],
  points: 1,
};

const BONE_DRAGON: ItemInfo = {
  id: 'artifact-30',
  title: 'Bone Dragon',
  type: 'artifact',
  creature: ['dragon'],
  cost: {
    black: 4,
    green: 1,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { black: 1 },
        },
      },
    },
  ],
  points: 1,
};

const WATER_DRAGON: ItemInfo = {
  id: 'artifact-31',
  title: 'Water Dragon',
  type: 'artifact',
  creature: ['dragon'],
  cost: {
    blue: 6,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { red: 1 },
        },
      },
    },
  ],
  points: 1,
};

const ELVISH_BOW: ItemInfo = {
  id: 'artifact-32',
  title: 'Elvish Bow',
  type: 'artifact',
  cost: {
    red: 2,
    green: 1,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        attack: {
          value: 1,
        },
      },
    },
    {
      cost: { tap: ['self'] },
      reward: {
        drawCards: 1,
      },
    },
  ],
};

const TREANT: ItemInfo = {
  id: 'artifact-33',
  title: 'Treant',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    green: 3,
    red: 2,
  },
  collect: {
    green: 2,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gainEqualToRival: ['red', 'black'],
      },
    },
  ],
};

const HYPNOTIC_BASIN: ItemInfo = {
  id: 'artifact-34',
  title: 'Hypnotic Basin',
  type: 'artifact',
  cost: {
    blue: 2,
    red: 1,
    black: 1,
  },
  collect: {
    blue: 2,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gainEqualToRival: ['blue', 'red'],
      },
    },
  ],
};

const HOUND_OF_DEATH: ItemInfo = {
  id: 'artifact-35',
  title: 'Hound of Death',
  type: 'artifact',
  creature: ['demon', 'creature'],
  cost: {
    green: 3,
    black: 2,
  },
  collect: {
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
        attack: {
          value: 2,
        },
      },
    },
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        gainEqualToRival: ['black', 'gold'],
      },
    },
  ],
};

const POSSESSED_DEMON_SLAYER: ItemInfo = {
  id: 'artifact-36',
  title: 'Possessed Demon Slayer',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    gold: 1,
    red: 1,
    black: 1,
  },
  actions: [
    {
      cost: {
        tap: ['self'],
      },
      reward: {
        gainEqualToRival: ['red', 'demon'],
      },
    },
  ],
  reactions: [
    {
      type: 'demon',
      reward: { ignore: true },
    },
  ],
  points: 1,
};

const DRAGON_BRIDLE: ItemInfo = {
  id: 'artifact-37',
  title: 'Dragon Bridle',
  type: 'artifact',
  cost: {
    red: 1,
    green: 1,
    blue: 1,
    black: 1,
  },
  discount: {
    type: 'dragon',
    resources: {
      wild: 3,
    },
  },
  reactions: [
    {
      type: 'dragon',
      cost: { tap: ['self'] },
      reward: { ignore: true },
    },
  ],
  points: 1,
};

const VIAL_OF_LIGHT: ItemInfo = {
  id: 'artifact-38',
  title: 'Vial of Light',
  type: 'artifact',
  actions: [
    {
      cost: { tap: ['self'], discard: { resources: { black: 1 } } },
      reward: { gain: { resources: { green: 1, red: 1 }, target: 'player' } },
    },
  ],
  reactions: [
    {
      type: 'artifact-destroyed',
      reward: {
        gain: {
          resources: { wild: 1, wildRestrictions: ['gold', 'black'] },
          target: 'player',
        },
      },
    },
  ],
};

const DRAGON_TEETH: ItemInfo = {
  id: 'artifact-39',
  title: 'Dragon Teeth',
  type: 'artifact',
  cost: {
    red: 1,
    black: 1,
  },
  actions: [
    {
      cost: { discard: { resources: { red: 2 } } },
      reward: { gain: { resources: { red: 3 }, target: 'self' } },
    },
    {
      cost: { tap: ['self'], discard: { resources: { red: 3 } } },
      reward: { discount: { type: 'dragon', free: true } },
    },
  ],
};

const DRAGON_EGG: ItemInfo = {
  id: 'artifact-40',
  title: 'Dragon Egg',
  type: 'artifact',
  cost: {
    gold: 1,
  },
  actions: [
    {
      cost: { destroy: 'self' },
      reward: { discount: { type: 'dragon', resources: { wild: 4 } } },
    },
  ],
  points: 1,
};

const CRYPT: ItemInfo = {
  id: 'artifact-41',
  title: 'Crypt',
  type: 'artifact',
  cost: {
    wild: 3,
    black: 2,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: { gain: { resources: { black: 2 }, target: 'player' } },
    },
    {
      cost: { tap: ['self'], discard: { resources: { black: 1 } } },
      reward: {
        discount: {
          type: 'discarded-card',
          resources: { wild: 2, wildRestrictions: ['gold'] },
        },
      },
    },
  ],
};

const VORTEX_OF_DESTRUCTION: ItemInfo = {
  id: 'artifact-42',
  title: 'Vortex of Destruction',
  type: 'artifact',
  creature: ['demon'],
  cost: {
    red: 2,
    green: 2,
    black: 1,
  },
  collect: {
    black: 1,
    red: 1,
  },
  actions: [
    {
      cost: { tap: ['self'], destroy: 'another-artifact' },
      reward: {
        destroyedArtifactBonus: {
          wild: 2,
          wildRestrictions: ['gold'],
        },
      },
    },
    {
      cost: { tap: ['self'], discard: { resources: { green: 1 } } },
      reward: { gain: { resources: { black: 3 }, target: 'player' } },
    },
  ],
};

const FIERY_WHIP: ItemInfo = {
  id: 'artifact-43',
  title: 'Fiery Whip',
  type: 'artifact',
  cost: {
    red: 2,
    black: 2,
  },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: {
        gain: { resources: { red: 3 }, target: 'player' },
        rivalsGainResources: { red: 1 },
      },
    },
    {
      cost: { tap: ['self'], destroy: 'another-artifact' },
      reward: {
        destroyedArtifactBonus: {
          wild: 2,
          wildRestrictions: ['gold'],
        },
      },
    },
  ],
};

const CORRUPT_ALTAR: ItemInfo = {
  id: 'artifact-44',
  title: 'Corrupt Altar',
  type: 'artifact',
  cost: {
    wild: 3,
    black: 2,
  },
  collect: {
    green: 1,
    black: 1,
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
        gain: { resources: { red: 3 }, target: 'self' },
      },
    },
    {
      cost: { tap: ['self'], destroy: 'any-artifact' },
      reward: {
        destroyedArtifactBonus: {
          wild: 2,
          wildRestrictions: ['gold'],
        },
      },
    },
  ],
};

const GUARD_DOG: ItemInfo = {
  id: 'artifact-45',
  title: 'Guard Dog',
  type: 'artifact',
  creature: ['creature'],
  cost: {
    red: 1,
  },
  actions: [
    {
      cost: { discard: { resources: { red: 1 } } },
      reward: {
        untap: 'self',
      },
    },
  ],
  reactions: [
    {
      type: 'any-life-loss',
      cost: { tap: ['self'] },
      reward: { ignore: true },
    },
  ],
};

const SACRIFICIAL_DAGGER: ItemInfo = {
  id: 'artifact-46',
  title: 'Sacrificial Dagger',
  type: 'artifact',
  cost: {
    black: 1,
    gold: 1,
  },
  actions: [
    {
      cost: { tap: ['self'], discard: { resources: { green: 1 } } },
      reward: {
        gain: { resources: { black: 3 }, target: 'self' },
      },
    },
    {
      cost: { destroy: 'self', discard: { card: 1 } },
      reward: {
        destroyedArtifactBonus: {
          wild: 1,
          wildRestrictions: ['gold'],
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
  TREE_OF_LIFE,
  HAND_OF_GLORY,
  JEWELED_STATUETTE,
  FIRE_DEMON,
  SEA_SERPENT,
  WIND_DRAGON,
  EARTH_DRAGON,
  FIRE_DRAGON,
  BONE_DRAGON,
  WATER_DRAGON,
  ELVISH_BOW,
  TREANT,
  HYPNOTIC_BASIN,
  HOUND_OF_DEATH,
  POSSESSED_DEMON_SLAYER,
  DRAGON_BRIDLE,
  VIAL_OF_LIGHT,
  DRAGON_TEETH,
  DRAGON_EGG,
  CRYPT,
  VORTEX_OF_DESTRUCTION,
  FIERY_WHIP,
  CORRUPT_ALTAR,
  GUARD_DOG,
  SACRIFICIAL_DAGGER,
];
