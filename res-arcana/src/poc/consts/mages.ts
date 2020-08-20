import { Mage } from '../types'

/* Starting Hand */

const DUELIST: Mage = {
  id: 'mage-1',
  title: 'Duelist',
  type: 'mage',
  collect: [{ red: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            black: 1
          }
        }
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
  startingHand: 1
}

const SEER: Mage = {
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
          options: ['player', 'monuments']
        }
      }
    }
  ],
  startingHand: 2
}

const ALCHEMIST: Mage = {
  id: 'mage-3',
  title: 'Alchemist',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 4
          }
        }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: ['self']
      },
      reward: {
        gain: {
          resources: {
            wild: 1,
            wildRestrictions: ['gold']
          },
          target: 'player'
        }
      }
    }
  ],
  startingHand: 3
}

const TRANSMUTER: Mage = {
  id: 'mage-4',
  title: 'Transmuter',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 2
          }
        }
      },
      reward: {
        gain: {
          resources: {
            wild: 3,
            wildRestrictions: ['gold']
          },
          target: 'player'
        }
      }
    }
  ],
  startingHand: 4
}

/* Base */

const ARTIFICER: Mage = {
  id: 'mage-5',
  title: 'Artificer',
  type: 'mage',
  discount: {
    type: 'artifact',
    resources: {
      wild: 1,
      wildRestrictions: ['gold']
    }
  }
}

const DRUID: Mage = {
  id: 'mage-6',
  title: 'Druid',
  type: 'mage',
  collect: { green: 1 },
  actions: [
    {
      cost: { tap: ['self'] },
      reward: { untap: 'creature' }
    }
  ]
}

const HEALER: Mage = {
  id: 'mage-7',
  title: 'Healer',
  type: 'mage',
  collect: [{ blue: 1 }, { green: 1 }],
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        tap: ['self']
      },
      reward: { ignore: true }
    }
  ]
}

const NECROMANCER: Mage = {
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
            green: 2
          }
        }
      },
      reward: {
        gain: {
          resources: {
            black: 3
          },
          target: 'self'
        }
      }
    }
  ]
}

const SCHOLAR: Mage = {
  id: 'mage-9',
  title: 'Scholar',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 1
          }
        }
      },
      reward: { drawCards: 1 }
    }
  ]
}

const WITCH: Mage = {
  id: 'mage-10',
  title: 'Witch',
  type: 'mage',
  collect: [{ green: 1 }, { black: 1 }],
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            wild: 2
          }
        }
      },
      reward: { untap: 'any' }
    }
  ]
}

/* Expansion 1 */

const BARD: Mage = {
  id: 'mage-11',
  title: 'bard',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          creature: ['dragon', 'creature', 'demon']
        }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: ['self']
      },
      reward: {
        gain: {
          resources: {
            wild: 1,
            wildRestrictions: ['gold']
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const BEAST_MASTER: Mage = {
  id: 'mage-12',
  title: 'Beastmaster',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            green: 1
          }
        }
      },
      reward: {
        gain: {
          resources: {
            green: 3
          },
          target: 'self'
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
            wild: 2,
            wildRestrictions: ['gold']
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const DEMONOLOGIST: Mage = {
  id: 'mage-13',
  title: 'Demonologist',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: ['self'],
        discard: {
          resources: {
            green: 1
          }
        }
      },
      reward: { retrieveDiscardedCard: 1 }
    },
    {
      cost: {
        tap: ['self']
      },
      reward: {
        untap: 'demon'
      }
    }
  ],
  expansion: 1
}

const DIVINER: Mage = {
  id: 'mage-14',
  title: 'Diviner',
  type: 'mage',
  collect: [{ red: 1 }],
  actions: [
    {
      cost: {
        tap: ['self']
      },
      reward: {
        drawAndDiscard: [3, 3]
      }
    }
  ],
  expansion: 1
}

export const MAGES = [
  /* Starting Hand */
  DUELIST,
  SEER,
  ALCHEMIST,
  TRANSMUTER,
  /* Base */
  ARTIFICER,
  DRUID,
  HEALER,
  NECROMANCER,
  SCHOLAR,
  WITCH,
  /* Expansion 1 */
  BARD,
  BEAST_MASTER,
  DEMONOLOGIST,
  DIVINER
]
