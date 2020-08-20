// Generic

type Creature = 'dragon' | 'creature' | 'demon'

type TapType = Creature | 'self' | 'any' | 'all-player-demons'

type ResourceType = 'red' | 'green' | 'blue' | 'black' | 'gold'

interface And<T> {
  and: T[]
}

interface Or<T> {
  or: T[]
}

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

type DestroyType = Creature | 'self' | 'another-artifact' | 'any-artifact'

interface ActionCost {
  tap?: TapType[]
  destroy?: DestroyType[]
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
  discardToIgnore?: Resources | 'artifact' | 'card'
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
  destroyedArtifactInGold?: true
  claimScroll?: number
  thisTurnActAs?: Creature[]
  checkVictoryNow?: boolean
  placeFreeCreatureFromAnyPlayer?: Creature
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
  type: Creature | 'artifact' | 'discarded-card'
  resources?: Resources
  free?: boolean
}

// points

interface PointsPer {
  type: Creature | ResourceType | 'artifact'
  points: number
  target: 'self' | 'player'
  divide?: number
}

// Item

interface ItemBase {
  id: string
  title: string
  collect?: Resources | Or<Resources>
  discount?: Discount
  actions?: Action[]
  reactions?: Reaction[]
  points?: number
  expansion?: number
}

export interface Artifact extends ItemBase {
  type: 'artifact'
  cost: Resources
  creature?: Creature | And<Creature>
  collectSpecial?: 'windup-man' | 'vault' | 'cursed-forge'
  startingHand?: number
}

export interface Mage extends ItemBase {
  type: 'mage'
  startingHand?: number
}

export interface MagicItem extends ItemBase {
  type: 'magic-item'
}

export interface Monument extends ItemBase {
  type: 'monument'
  cost: Resources & { gold: 4 }
}

export interface Scroll extends ItemBase {
  type: 'scroll'
  expansion: 1
}

export interface PlaceOfPower extends ItemBase {
  type: 'place-of-power'
  cost: Resources
  collectSpecial?: 'cursed-forge'
  pointsPer?: PointsPer | And<PointsPer>
}

export interface PlaceOfPowerSet {
  id: string
  sideA: PlaceOfPower
  sideB: PlaceOfPower
  expansion?: number
}

// export interface Item {
//   info: ItemBase;
//   tapped: boolean;
//   resourcesOnItem: Resources;
// }
