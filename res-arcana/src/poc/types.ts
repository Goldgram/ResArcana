// Generic

type Creature = 'dragon' | 'creature' | 'demon'

type TapType = 'self' | 'any' | Creature

type ResourceType = 'red' | 'green' | 'blue' | 'black' | 'gold'

interface Resources {
  red?: number
  green?: number
  blue?: number
  black?: number
  gold?: number
  wild?: number
  wildRestrictions?: ResourceType[]
}

type OrResources = Resources[]

interface Action {
  cost: ActionCost
  reward: ActionReward
}

// Cost

interface Discard {
  anyResources?: true
  resources?: Resources | OrResources
  creature?: Creature[]
  card?: number
  targetSelf?: boolean
}

interface ActionCost {
  tap?: TapType[]
  destroy?: 'self' | 'another-artifact' | 'any-artifact'
  discard?: Discard
  equalDiscard?: 'wild'
}

// Reward

type ReorderCardsScope = 'player' | 'monuments'

interface ReorderCards {
  numberOfCards: number
  options: ReorderCardsScope[]
}

interface Gain {
  target: 'player' | 'self' | 'any'
  resources?: Resources
  sameResourcesAsCost?: boolean
  sameResourceNumberAsEqualDiscard?: Resources
  thirdResourceNumberAsEqualDiscard?: Resources
  equalToRival?: [GainEqualType, GainEqualType]
  allResourcesFromAnyItem?: boolean
}

interface Attack {
  value: number
  discardToIgnore?: 'artifact' | 'card' | Resources
}

type GainEqualType = ResourceType | Creature

interface ActionReward {
  untap?: TapType
  gain?: Gain
  rivalsGainResources?: Resources
  reorderTopCards?: ReorderCards
  drawCards?: number
  drawAndDiscard?: [number, number]
  retrieveDiscardedCard?: number
  ignore?: boolean
  attack?: Attack
  discount?: Discount
  thisCheckVictoryBonus?: number
  destroyedArtifactBonus?: Resources
  claimScroll?: number
  thisTurnActAs?: Creature[]
}

// Reaction
type ReactionType =
  | 'self-bought'
  | 'victory-check'
  | 'artifact-destroyed'
  | 'player-using-power'
  | 'any-life-loss'
  | Creature

interface Reaction {
  type: ReactionType
  cost?: ActionCost
  reward: ActionReward
}

// Discount

interface Discount {
  type: 'artifact' | 'discarded-card' | Creature
  resources?: Resources
  free?: boolean
}

// points

// type pointsPerResource = (resourcesOnCard: Resources) => number;

// Item

interface ItemBase {
  id: string
  title: string
  expansion?: number
  collect?: Resources | OrResources
  actions?: Action[]
  reactions?: Reaction[]
}

export interface Artifact extends ItemBase {
  type: 'artifact'
  cost: Resources
  creature?: Creature[]
  points?: number
  discount?: Discount
  collectSpecial?: 'windup-man' | 'vault' | 'cursed-forge'
  startingHand?: number
}

export interface Mage extends ItemBase {
  type: 'mage'
  discount?: Discount
  startingHand?: number
}

export interface MagicItem extends ItemBase {
  type: 'magic-item'
}

export interface Monument extends ItemBase {
  type: 'monument'
  cost: Resources & { gold: 4 }
  points?: number
}

export interface Scroll extends ItemBase {
  type: 'scroll'
  expansion: 1
}

export interface PlaceOfPower extends ItemBase {
  type: 'place-of-power'
  cost: Resources
  collectSpecial?: 'cursed-forge'
  points?: number
  pointPerResourceOnSelf?: ResourceType
}

export interface PlaceOfPowerSet {
  id: string
  sideA: PlaceOfPower
  sideB: PlaceOfPower
}

// export interface Item {
//   info: ItemBase;
//   tapped: boolean;
//   resourcesOnItem: Resources;
// }
