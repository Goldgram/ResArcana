// Generic

type Creature = 'dragon' | 'creature' | 'demon';

// type BaseTapType = 'self' | 'any' | Creature;
// type OrTapType = BaseTapType[];
// type TapType = BaseTapType | OrTapType;

type TapType = 'self' | 'any' | Creature;

type ResourceType = 'red' | 'green' | 'blue' | 'black' | 'gold';

interface Resources {
  red?: number;
  green?: number;
  blue?: number;
  black?: number;
  gold?: number;
  wild?: number;
  wildRestrictions?: ResourceType[];
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
  card?: number;
}

interface ActionCost {
  tap?: TapType[];
  destroy?: 'self' | 'another-artifact' | 'any-artifact';
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

interface Attack {
  value: number;
  discardToIgnore?: 'artifact' | 'card' | Resources;
}

type GainEqualType = ResourceType | Creature;

interface ActionReward {
  untap?: TapType;
  gain?: Gain;
  gainEqualToRival?: [GainEqualType, GainEqualType];
  rivalsGainResources?: Resources;
  reorderTopCards?: ReorderCards;
  drawCards?: number;
  drawAndDiscard?: [number, number];
  retrieveDiscardedCard?: number;
  ignore?: boolean;
  attack?: Attack;
  discount?: Discount;
  thisCheckVictoryBonus?: number;
  destroyedArtifactBonus?: Resources;
}

// Reaction
type ReactionType =
  | 'self-bought'
  | 'any-life-loss'
  | 'victory-check'
  | 'artifact-destroyed'
  | Creature;

interface Reaction {
  type: ReactionType;
  cost?: ActionCost;
  reward: ActionReward;
}

// Discount

interface Discount {
  type: 'artifact' | 'discarded-card' | Creature;
  resources?: Resources;
  free?: boolean;
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
