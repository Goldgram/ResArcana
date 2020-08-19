// Generic

type Creature = 'dragon' | 'creature' | 'demon';

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
  anyResources?: true;
  resources?: Resources | OrResources;
  creature?: Creature[];
  card?: number;
  targetSelf?: boolean;
}

interface ActionCost {
  tap?: TapType[];
  destroy?: 'self' | 'another-artifact' | 'any-artifact';
  discard?: Discard;
  equalDiscard?: 'wild';
}

// Reward

type ReorderCardsScope = 'player' | 'monuments';

interface ReorderCards {
  numberOfCards: number;
  options: ReorderCardsScope[];
}

interface Gain {
  target: 'player' | 'self' | 'any';
  resources?: Resources;
  sameResourcesAsCost?: boolean;
  sameResourceNumberAsEqualDiscard?: Resources;
  equalToRival?: [GainEqualType, GainEqualType];
  allResourcesFromAnyItem?: boolean;
}

interface Attack {
  value: number;
  discardToIgnore?: 'artifact' | 'card' | Resources;
}

type GainEqualType = ResourceType | Creature;

interface ActionReward {
  untap?: TapType;
  gain?: Gain;
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

interface ItemBase {
  id: string;
  title: string;
  // version: 'base' | 'expansion-1';
  collect?: Resources | OrResources;
  actions?: Action[];
  reactions?: Reaction[];
}

export interface Artifact extends ItemBase {
  type: 'artifact';
  cost: Resources;
  creature?: Creature[];
  points?: number;
  discount?: Discount;
  collectSpecial?: 'windup-man' | 'vault';
  // startingHand?: number;
}

export interface Mage extends ItemBase {
  type: 'mage';
  discount?: Discount;
  // startingHand?: number;
}

export interface MagicItem extends ItemBase {
  type: 'magic-item';
}

export interface Monument extends ItemBase {
  type: 'monument';
  cost: Resources & { gold: 4 };
  points?: number;
}

export interface PlaceOfPower extends ItemBase {
  type: 'place-of-power';
  side: 'A' | 'B';
  cost: Resources;
}

// export interface Item {
//   info: ItemBase;
//   tapped: boolean;
//   resourcesOnItem: Resources;
// }
