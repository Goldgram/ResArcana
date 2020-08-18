// Generic

type Creature = 'dragon' | 'creature' | 'demon';

type TapType = 'self' | 'any' | Creature;

type Restrictions = 'red' | 'green' | 'blue' | 'black' | 'gold';

interface Resources {
  red?: number;
  green?: number;
  blue?: number;
  black?: number;
  gold?: number;
  wild?: number;
  wildRestrictions?: Restrictions[];
}

type OrResources = Resources[];

interface Action {
  cost: ActionCost;
  reward: ActionReward;
}

// Cost

interface Discard {
  resources?: Resources | OrResources;
  creature?: Creature[];
}

interface ActionCost {
  tap?: TapType[];
  destroy?: 'self';
  discard?: Discard;
}

// Reward

type ReorderCardsScope = 'player' | 'monuments';

interface ReorderCards {
  numberOfCards: number;
  options: ReorderCardsScope[];
}

interface Gain {
  sameAsCost?: boolean;
  resources?: Resources;
  target: 'player' | 'self' | 'any';
}

interface ActionReward {
  untap?: TapType;
  gain?: Gain;
  rivalsGainResources?: Resources;
  reorderTopCards?: ReorderCards;
  drawCards?: number;
  drawAndDiscard?: [number, number];
  retrieveDiscardedCard?: number;
  ignore?: boolean;
}

// Reaction

interface Reaction {
  type: 'any-life-loss' | 'self-bought';
  cost?: ActionCost;
  reward: ActionReward;
}

// Discount

interface Discount {
  type: 'artifact' | 'demon';
  resources: Resources;
}

// points

// type pointsPerResource = (resourcesOnCard: Resources) => number;

// Item

export interface ItemInfo {
  id: string;
  title: string;
  type: 'mage' | 'artifact' | 'monument' | 'placeOfPower';
  creature?: Creature[];
  cost?: Resources;
  collect?: Resources | OrResources;
  points?: number; //| pointsPerResource;
  actions?: Action[];
  reactions?: Reaction[];
  discount?: Discount;
}

export interface Item {
  info: ItemInfo;
  tapped: boolean;
  resourcesOnItem: Resources;
}
