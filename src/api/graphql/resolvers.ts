/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type FieldWrapper<T> = T | (() => T);
export type ResolverFn<TResult, TParent, TContext, TArgs> = TResult | (() => TResult)
type RecursivePartial<T> = T extends object ? { [K in keyof T]?: RecursivePartial<T[K]> } : T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** define a single ability */
export type AbilitiesListItem = {
  __typename: 'AbilitiesListItem';
  /** The ability effect */
  effect?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The ability name */
  name?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the ability type ('Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait') */
  type?: Maybe<FieldWrapper<Scalars['String']['output']>>;
};

/** define a single attack */
export type AttacksListItem = {
  __typename: 'AttacksListItem';
  /** The attack cost in energies (can be affected by the effect) */
  cost?: Maybe<Array<Maybe<FieldWrapper<Scalars['String']['output']>>>>;
  /** The attack damage (can be affected by the effect) */
  damage?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The attack additionnal effect */
  effect?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The attack name */
  name: FieldWrapper<Scalars['String']['output']>;
};

/** Define what is a card for GraphQL */
export type Card = {
  __typename: 'Card';
  /** The pokémon abilities */
  abilities?: Maybe<Array<Maybe<FieldWrapper<AbilitiesListItem>>>>;
  /** The pokémon attacks */
  attacks?: Maybe<Array<Maybe<FieldWrapper<AttacksListItem>>>>;
  /** The card category ('Pokemon' | 'Trainer' | 'Energy') */
  category: FieldWrapper<Scalars['String']['output']>;
  /** The card description (mostly the Poédex description) */
  description?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The pokémon(s) Pokédex IDs (Pokémons appearing on the card image & name) */
  dexId?: Maybe<Array<Maybe<FieldWrapper<Scalars['Int']['output']>>>>;
  /** the energy/trainer effect */
  effect?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the energy type ('Normal' | 'Special') */
  energyType?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the previous evolution of the current pokémon */
  evolveFrom?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the Pokémon's HPs */
  hp?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** the card id */
  id: FieldWrapper<Scalars['String']['output']>;
  /** the illustrator name */
  illustrator?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The card's image if available (see the docs for more details) */
  image?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The Pokémon's item */
  item?: Maybe<FieldWrapper<Item>>;
  /** The card legality in tournaments */
  legal: FieldWrapper<Legal>;
  /** The Pokémon level */
  level?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** the card's local id */
  localId: FieldWrapper<Scalars['String']['output']>;
  /** the Card's name */
  name: FieldWrapper<Scalars['String']['output']>;
  /**
   * the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity: FieldWrapper<Scalars['String']['output']>;
  /** the card's regulation mark */
  regulationMark?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The pokémon resistances */
  resistances?: Maybe<Array<Maybe<FieldWrapper<WeakResListItem>>>>;
  /** The Card retreat cost */
  retreat?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** The card's set */
  set: FieldWrapper<Set>;
  /** the Card evolution stage */
  stage?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the card suffix */
  suffix?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the trainer type */
  trainerType?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The pokémon type(s) (trivia: Even the TCG implemented at some point multiple types for a single card) */
  types?: Maybe<Array<Maybe<FieldWrapper<Scalars['String']['output']>>>>;
  /** The card variants */
  variants?: Maybe<FieldWrapper<Variants>>;
  /** The pokémon weaknesses */
  weaknesses?: Maybe<Array<Maybe<FieldWrapper<WeakResListItem>>>>;
};

/**
 * Indicate how much cards a set contains
 *
 * It also indicate how much card for a specific variant
 */
export type CardCount = {
  __typename: 'CardCount';
  /** The number of first edition cards in the set */
  firstEd?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** The number of holo cards in the set */
  holo?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** The number of normal cards in the set */
  normal?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** The number of cards that are not hidden (generally in the bottom left/right) */
  official: FieldWrapper<Scalars['Int']['output']>;
  /** The number of reverse cards in the set */
  reverse?: Maybe<FieldWrapper<Scalars['Int']['output']>>;
  /** The total number of cards in the set */
  total: FieldWrapper<Scalars['Int']['output']>;
};

/** a Card filters */
export type CardsFilters = {
  /** Filter on the card's category (Pokemon, Trainer or Energy) */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card's decription */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the pokémon national pokédex number */
  dexId?: InputMaybe<Scalars['Int']['input']>;
  /** Filter for the card energy type (normal or special) */
  energyType?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the previous evolution of the current pokémon */
  evolveFrom?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the Pokémon's HPs */
  hp?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the card id */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Filter on the illustrator name */
  illustrator?: InputMaybe<Scalars['String']['input']>;
  /** Filter on ths Pokémon's level */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Filter for the card's local id */
  localId?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the Card's name */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter on the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card's regulation mark */
  regulationMark?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the retreat point cost */
  retreat?: InputMaybe<Scalars['Int']['input']>;
  /** Filter on the Card evolution stage */
  stage?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the card suffix */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** Filter on the trainer type */
  trainerType?: InputMaybe<Scalars['String']['input']>;
};

/** Indicate the item a pokémon has on him */
export type Item = {
  __typename: 'Item';
  /** the item effect */
  effect: FieldWrapper<Scalars['String']['output']>;
  /** the item name */
  name: FieldWrapper<Scalars['String']['output']>;
};

/** Indicate the legality of a card for official tournaments */
export type Legal = {
  __typename: 'Legal';
  /** Is the card playable in expanded tournaments? */
  expanded?: Maybe<FieldWrapper<Scalars['Boolean']['output']>>;
  /** Is the card playable in standard tournaments? */
  standard?: Maybe<FieldWrapper<Scalars['Boolean']['output']>>;
};

/** Paginate the datas you fetch */
export type Pagination = {
  /** Indicate the number of items in one page */
  itemsPerPage?: InputMaybe<Scalars['Int']['input']>;
  /** Indicate the page number (from 1) */
  page: Scalars['Int']['input'];
};

/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type Query = {
  __typename: 'Query';
  /** Find one card (using the id and set is deprecated) */
  card?: Maybe<FieldWrapper<Card>>;
  /** Find the cards */
  cards?: Maybe<Array<Maybe<FieldWrapper<Card>>>>;
  /** Find one serie (using the id is deprecated) */
  serie?: Maybe<FieldWrapper<Serie>>;
  /** Find the series */
  series?: Maybe<Array<Maybe<FieldWrapper<Serie>>>>;
  /** Find one set (using the id is deprecated) */
  set?: Maybe<FieldWrapper<Set>>;
  /** Find the sets */
  sets?: Maybe<Array<Maybe<FieldWrapper<Set>>>>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryCardArgs = {
  filters?: InputMaybe<CardsFilters>;
  id?: InputMaybe<Scalars['ID']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QueryCardsArgs = {
  filters?: InputMaybe<CardsFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerySerieArgs = {
  filters?: InputMaybe<SerieFilters>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerySeriesArgs = {
  filters?: InputMaybe<SerieFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerySetArgs = {
  filters?: InputMaybe<SetFilters>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Every queries available on the GraphQL API
 *
 * If you have more queries that you would like added, make a new issue here
 *
 * https://github.com/tcgdex/cards-database/issues/new/choose
 */
export type QuerySetsArgs = {
  filters?: InputMaybe<SetFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<Sort>;
};

/** A Pokémon TCG serie */
export type Serie = {
  __typename: 'Serie';
  /** The Serie ID */
  id: FieldWrapper<Scalars['String']['output']>;
  /** The serie's logo if available */
  logo?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** the serie's name */
  name: FieldWrapper<Scalars['String']['output']>;
  /** the list of sets that are part of the serie */
  sets: Array<Maybe<FieldWrapper<Set>>>;
};

/** The Serie filters */
export type SerieFilters = {
  /** the serie's id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the serie */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Describe a single set */
export type Set = {
  __typename: 'Set';
  /** Indicate how much cards is in the set */
  cardCount: FieldWrapper<CardCount>;
  /** list the cards in the set */
  cards: Array<Maybe<FieldWrapper<Card>>>;
  /** The Set id */
  id: FieldWrapper<Scalars['String']['output']>;
  /** The set logo if available */
  logo?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The set's name */
  name: FieldWrapper<Scalars['String']['output']>;
  /** The set official release date */
  releaseDate: FieldWrapper<Scalars['String']['output']>;
  /** The Set serie */
  serie: FieldWrapper<Serie>;
  /** The set's symbol if available */
  symbol?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: Maybe<FieldWrapper<Scalars['String']['output']>>;
};

/** Filters for the set query */
export type SetFilters = {
  /** The Set id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The set's name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The set official release date */
  releaseDate?: InputMaybe<Scalars['String']['input']>;
  /** The Set serie */
  serie?: InputMaybe<Scalars['String']['input']>;
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: InputMaybe<Scalars['String']['input']>;
};

/** Change how the data is sorted */
export type Sort = {
  /** Indicate which field it will sort using */
  field: Scalars['String']['input'];
  /** Indicate how it is sorted ("ASC" or "DESC) (default: "ASC") */
  order?: InputMaybe<Scalars['String']['input']>;
};

/** currently unused but is the general endpoint for every other elements */
export type StringEndpoint = {
  __typename: 'StringEndpoint';
  /** The list of cards that are available in the endpoint */
  cards: Array<Maybe<FieldWrapper<Card>>>;
  /** The endpoint element name */
  name: FieldWrapper<Scalars['String']['output']>;
};

/** All the card variants */
export type Variants = {
  __typename: 'Variants';
  /** is the card available in a first edition version? */
  firstEdition: FieldWrapper<Scalars['Boolean']['output']>;
  /** can the card be found has an holo? */
  holo: FieldWrapper<Scalars['Boolean']['output']>;
  /** can the card be found without special elements? */
  normal: FieldWrapper<Scalars['Boolean']['output']>;
  /** Can the card be found a a reverse holo version? */
  reverse: FieldWrapper<Scalars['Boolean']['output']>;
  /** was the card a wPromo card? */
  wPromo: FieldWrapper<Scalars['Boolean']['output']>;
};

/** Definition for the Weakness and REsistance elements */
export type WeakResListItem = {
  __typename: 'WeakResListItem';
  /** the Weakness/resistance type */
  type: FieldWrapper<Scalars['String']['output']>;
  /** the Weakness/resistance modifier (can be 2x or 30+ or nothing) */
  value?: Maybe<FieldWrapper<Scalars['String']['output']>>;
};



export type ResolverTypeWrapper<T> = RecursivePartial<T>;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AbilitiesListItem: ResolverTypeWrapper<AbilitiesListItem>;
  AttacksListItem: ResolverTypeWrapper<AttacksListItem>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Card: ResolverTypeWrapper<Card>;
  CardCount: ResolverTypeWrapper<CardCount>;
  CardsFilters: CardsFilters;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  Legal: ResolverTypeWrapper<Legal>;
  Pagination: Pagination;
  Query: ResolverTypeWrapper<{}>;
  Serie: ResolverTypeWrapper<Serie>;
  SerieFilters: SerieFilters;
  Set: ResolverTypeWrapper<Set>;
  SetFilters: SetFilters;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringEndpoint: ResolverTypeWrapper<StringEndpoint>;
  Variants: ResolverTypeWrapper<Variants>;
  WeakResListItem: ResolverTypeWrapper<WeakResListItem>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AbilitiesListItem: AbilitiesListItem;
  AttacksListItem: AttacksListItem;
  Boolean: Scalars['Boolean']['output'];
  Card: Card;
  CardCount: CardCount;
  CardsFilters: CardsFilters;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: Item;
  Legal: Legal;
  Pagination: Pagination;
  Query: {};
  Serie: Serie;
  SerieFilters: SerieFilters;
  Set: Set;
  SetFilters: SetFilters;
  Sort: Sort;
  String: Scalars['String']['output'];
  StringEndpoint: StringEndpoint;
  Variants: Variants;
  WeakResListItem: WeakResListItem;
};

export type LocaleDirectiveArgs = {
  lang: Scalars['String']['input'];
};

export type LocaleDirectiveResolver<Result, Parent, ContextType = Record<string, never>, Args = LocaleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbilitiesListItemResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['AbilitiesListItem'] = ResolversParentTypes['AbilitiesListItem']> = {
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttacksListItemResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['AttacksListItem'] = ResolversParentTypes['AttacksListItem']> = {
  cost?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  damage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = {
  abilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilitiesListItem']>>>, ParentType, ContextType>;
  attacks?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttacksListItem']>>>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dexId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energyType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evolveFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  illustrator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  legal?: Resolver<ResolversTypes['Legal'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  localId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regulationMark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resistances?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeakResListItem']>>>, ParentType, ContextType>;
  retreat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trainerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  variants?: Resolver<Maybe<ResolversTypes['Variants']>, ParentType, ContextType>;
  weaknesses?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeakResListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardCountResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['CardCount'] = ResolversParentTypes['CardCount']> = {
  firstEd?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  normal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  official?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reverse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LegalResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Legal'] = ResolversParentTypes['Legal']> = {
  expanded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  standard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  card?: Resolver<Maybe<ResolversTypes['Card']>, ParentType, ContextType, Partial<QueryCardArgs>>;
  cards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Card']>>>, ParentType, ContextType, Partial<QueryCardsArgs>>;
  serie?: Resolver<Maybe<ResolversTypes['Serie']>, ParentType, ContextType, Partial<QuerySerieArgs>>;
  series?: Resolver<Maybe<Array<Maybe<ResolversTypes['Serie']>>>, ParentType, ContextType, Partial<QuerySeriesArgs>>;
  set?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, Partial<QuerySetArgs>>;
  sets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType, Partial<QuerySetsArgs>>;
};

export type SerieResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Serie'] = ResolversParentTypes['Serie']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sets?: Resolver<Array<Maybe<ResolversTypes['Set']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = {
  cardCount?: Resolver<ResolversTypes['CardCount'], ParentType, ContextType>;
  cards?: Resolver<Array<Maybe<ResolversTypes['Card']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serie?: Resolver<ResolversTypes['Serie'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tcgOnline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringEndpointResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['StringEndpoint'] = ResolversParentTypes['StringEndpoint']> = {
  cards?: Resolver<Array<Maybe<ResolversTypes['Card']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantsResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['Variants'] = ResolversParentTypes['Variants']> = {
  firstEdition?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  holo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  normal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reverse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wPromo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeakResListItemResolvers<ContextType = Record<string, never>, ParentType extends ResolversParentTypes['WeakResListItem'] = ResolversParentTypes['WeakResListItem']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Record<string, never>> = {
  AbilitiesListItem?: AbilitiesListItemResolvers<ContextType>;
  AttacksListItem?: AttacksListItemResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  CardCount?: CardCountResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Legal?: LegalResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Serie?: SerieResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  StringEndpoint?: StringEndpointResolvers<ContextType>;
  Variants?: VariantsResolvers<ContextType>;
  WeakResListItem?: WeakResListItemResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = Record<string, never>> = {
  locale?: LocaleDirectiveResolver<any, any, ContextType>;
};
