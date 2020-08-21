// Generic

type Creature = 'dragon' | 'creature' | 'demon'

type ResourceType = 'red' | 'green' | 'blue' | 'black' | 'gold'

interface And<T> {
  and: T[]
}

interface Or<T> {
  or: T[]
}

export interface Resources {
  red?: number
  green?: number
  blue?: number
  black?: number
  gold?: number
  wild?: number
  wildRestrictions?: ResourceType | And<ResourceType>
}

// Action / Reactions

interface Action {
  cost: ActionCost
  reward: ActionReward
}

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

// Action Cost

interface ActionCost {
  tap?: TapType | And<TapType>
  destroy?: DestroyType | Or<DestroyType>
  discard?: Discard
  wildDiscard?: boolean
}

type TapType = Creature | 'self' | 'any' | 'all-player-demons'

type DestroyType = Creature | 'self' | 'another-artifact' | 'any-artifact'

interface Discard {
  resources?: Resources | Or<Resources>
  anyResources?: true
  creature?: Creature | Or<Creature>
  card?: number
  targetSelf?: boolean
}

// Action Reward

interface ActionReward {
  untap?: TapType
  gain?: Gain
  rivalsGainResources?: Resources
  reorderTopCards?: number
  drawCards?: number
  drawAndDiscard?: [number, number]
  retrieveDiscardedCard?: number
  ignore?: boolean
  thisCheckVictoryBonus?: number
  destroyedArtifactBonus?: Resources
  destroyedArtifactInGold?: true
  claimScroll?: boolean
  checkVictoryNow?: boolean
  thisTurnActAs?: Creature | Or<Creature>
  placeFreeCreatureFromAnyPlayerDiscard?: Creature
  discount?: Discount
  attack?: Attack
}

interface Gain {
  target: 'player' | 'self' | 'any'
  resources?: Resources
  equalToRival?: [ResourceType, ResourceType | Creature]
  sameResourcesAsCost?: boolean
  allResourcesFromAnyItem?: boolean
  resourceNumberAsWildDiscard?: GainWildDiscard
}

interface GainWildDiscard {
  resource: 'gold' | 'wild-with-gold-restriction'
  divide?: number
}

interface Discount {
  type: Creature | 'artifact' | 'discarded-card'
  resources?: Resources
  free?: boolean
}

interface Attack {
  value: number
  discardToIgnore?: Resources | 'artifact' | 'card'
}

// Items

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

export interface ArtifactType extends ItemBase {
  type: 'artifact'
  cost: Resources
  creature?: Creature | And<Creature>
  collectSpecial?: 'windup-man' | 'vault' | 'cursed-forge'
  startingHand?: number
}

export interface MageType extends ItemBase {
  type: 'mage'
  startingHand?: number
}

export interface MagicItemType extends ItemBase {
  type: 'magic-item'
}

export interface MonumentType extends ItemBase {
  type: 'monument'
  cost: Resources & { gold: 4 }
}

export interface ScrollType extends ItemBase {
  type: 'scroll'
  expansion: 1
}

export interface PlaceOfPowerSet {
  id: string
  sideA: PlaceOfPowerType
  sideB: PlaceOfPowerType
  expansion?: number
}

export interface PlaceOfPowerType extends ItemBase {
  type: 'place-of-power'
  cost: Resources
  collectSpecial?: 'cursed-forge'
  pointsPer?: PointsPer | And<PointsPer>
}

interface PointsPer {
  type: Creature | ResourceType | 'artifact'
  points: number
  target: 'self' | 'player'
  divide?: number
}

// export interface Item {
//   info: ItemBase;
//   tapped: boolean;
//   resourcesOnItem: Resources;
// }
