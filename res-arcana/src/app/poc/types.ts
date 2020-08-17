// Generic
type Creature = 'dragon' | 'creature' | 'demon';

type TapType = 'self' | 'any' | Creature;

type Restrictions = 'gold';

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
  resources?: Resources;
  creature?: Creature[];
}

interface ActionCost {
  tap?: TapType[];
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
  reorderTopCards?: ReorderCards;
  drawCards?: number;
  drawAndDiscard?: [number, number];
  retrieveDiscardedCard?: number;
  ignore?: boolean;
}

// Reaction

interface Reaction {
  type: 'attack';
  cost: ActionCost;
  reward: ActionReward;
}

// Discount

interface Discount {
  type: 'artifact';
  resources: Resources;
}

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

// interface Mage extends ItemInfo {}
// interface Artifact extends ItemInfo {}
// interface Monument extends ItemInfo {}
// interface PlaceOfPower extends ItemInfo {}

// type pointsPerResource = (resourcesOnCard: Resources) => number;

export interface Item {
  info: ItemInfo;
  tapped: boolean;
  resourcesOnItem: Resources;
}
