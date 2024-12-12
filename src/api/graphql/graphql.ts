/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  effect?: Maybe<Scalars['String']['output']>;
  /** The ability name */
  name?: Maybe<Scalars['String']['output']>;
  /** the ability type ('Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait') */
  type?: Maybe<Scalars['String']['output']>;
};

/** define a single attack */
export type AttacksListItem = {
  __typename: 'AttacksListItem';
  /** The attack cost in energies (can be affected by the effect) */
  cost?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The attack damage (can be affected by the effect) */
  damage?: Maybe<Scalars['String']['output']>;
  /** The attack additionnal effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** The attack name */
  name: Scalars['String']['output'];
};

/** Define what is a card for GraphQL */
export type Card = {
  __typename: 'Card';
  /** The pokémon abilities */
  abilities?: Maybe<Array<Maybe<AbilitiesListItem>>>;
  /** The pokémon attacks */
  attacks?: Maybe<Array<Maybe<AttacksListItem>>>;
  /** The card category ('Pokemon' | 'Trainer' | 'Energy') */
  category: Scalars['String']['output'];
  /** The card description (mostly the Poédex description) */
  description?: Maybe<Scalars['String']['output']>;
  /** The pokémon(s) Pokédex IDs (Pokémons appearing on the card image & name) */
  dexId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** the energy/trainer effect */
  effect?: Maybe<Scalars['String']['output']>;
  /** the energy type ('Normal' | 'Special') */
  energyType?: Maybe<Scalars['String']['output']>;
  /** the previous evolution of the current pokémon */
  evolveFrom?: Maybe<Scalars['String']['output']>;
  /** the Pokémon's HPs */
  hp?: Maybe<Scalars['Int']['output']>;
  /** the card id */
  id: Scalars['String']['output'];
  /** the illustrator name */
  illustrator?: Maybe<Scalars['String']['output']>;
  /** The card's image if available (see the docs for more details) */
  image?: Maybe<Scalars['String']['output']>;
  /** The Pokémon's item */
  item?: Maybe<Item>;
  /** The card legality in tournaments */
  legal: Legal;
  /** The Pokémon level */
  level?: Maybe<Scalars['Int']['output']>;
  /** the card's local id */
  localId: Scalars['String']['output'];
  /** the Card's name */
  name: Scalars['String']['output'];
  /**
   * the card's rarity
   *
   * see: https://api.tcgdex.net/v2/en/rarities for the full list
   */
  rarity: Scalars['String']['output'];
  /** the card's regulation mark */
  regulationMark?: Maybe<Scalars['String']['output']>;
  /** The pokémon resistances */
  resistances?: Maybe<Array<Maybe<WeakResListItem>>>;
  /** The Card retreat cost */
  retreat?: Maybe<Scalars['Int']['output']>;
  /** The card's set */
  set: Set;
  /** the Card evolution stage */
  stage?: Maybe<Scalars['String']['output']>;
  /** the card suffix */
  suffix?: Maybe<Scalars['String']['output']>;
  /** the trainer type */
  trainerType?: Maybe<Scalars['String']['output']>;
  /** The pokémon type(s) (trivia: Even the TCG implemented at some point multiple types for a single card) */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The card variants */
  variants?: Maybe<Variants>;
  /** The pokémon weaknesses */
  weaknesses?: Maybe<Array<Maybe<WeakResListItem>>>;
};

/**
 * Indicate how much cards a set contains
 *
 * It also indicate how much card for a specific variant
 */
export type CardCount = {
  __typename: 'CardCount';
  /** The number of first edition cards in the set */
  firstEd?: Maybe<Scalars['Int']['output']>;
  /** The number of holo cards in the set */
  holo?: Maybe<Scalars['Int']['output']>;
  /** The number of normal cards in the set */
  normal?: Maybe<Scalars['Int']['output']>;
  /** The number of cards that are not hidden (generally in the bottom left/right) */
  official: Scalars['Int']['output'];
  /** The number of reverse cards in the set */
  reverse?: Maybe<Scalars['Int']['output']>;
  /** The total number of cards in the set */
  total: Scalars['Int']['output'];
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
  effect: Scalars['String']['output'];
  /** the item name */
  name: Scalars['String']['output'];
};

/** Indicate the legality of a card for official tournaments */
export type Legal = {
  __typename: 'Legal';
  /** Is the card playable in expanded tournaments? */
  expanded?: Maybe<Scalars['Boolean']['output']>;
  /** Is the card playable in standard tournaments? */
  standard?: Maybe<Scalars['Boolean']['output']>;
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
  card?: Maybe<Card>;
  /** Find the cards */
  cards?: Maybe<Array<Maybe<Card>>>;
  /** Find one serie (using the id is deprecated) */
  serie?: Maybe<Serie>;
  /** Find the series */
  series?: Maybe<Array<Maybe<Serie>>>;
  /** Find one set (using the id is deprecated) */
  set?: Maybe<Set>;
  /** Find the sets */
  sets?: Maybe<Array<Maybe<Set>>>;
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
  id: Scalars['String']['output'];
  /** The serie's logo if available */
  logo?: Maybe<Scalars['String']['output']>;
  /** the serie's name */
  name: Scalars['String']['output'];
  /** the list of sets that are part of the serie */
  sets: Array<Maybe<Set>>;
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
  cardCount: CardCount;
  /** list the cards in the set */
  cards: Array<Maybe<Card>>;
  /** The Set id */
  id: Scalars['String']['output'];
  /** The set logo if available */
  logo?: Maybe<Scalars['String']['output']>;
  /** The set's name */
  name: Scalars['String']['output'];
  /** The set official release date */
  releaseDate: Scalars['String']['output'];
  /** The Set serie */
  serie: Serie;
  /** The set's symbol if available */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The set tcgOnline code if available in the APP */
  tcgOnline?: Maybe<Scalars['String']['output']>;
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
  cards: Array<Maybe<Card>>;
  /** The endpoint element name */
  name: Scalars['String']['output'];
};

/** All the card variants */
export type Variants = {
  __typename: 'Variants';
  /** is the card available in a first edition version? */
  firstEdition: Scalars['Boolean']['output'];
  /** can the card be found has an holo? */
  holo: Scalars['Boolean']['output'];
  /** can the card be found without special elements? */
  normal: Scalars['Boolean']['output'];
  /** Can the card be found a a reverse holo version? */
  reverse: Scalars['Boolean']['output'];
  /** was the card a wPromo card? */
  wPromo: Scalars['Boolean']['output'];
};

/** Definition for the Weakness and REsistance elements */
export type WeakResListItem = {
  __typename: 'WeakResListItem';
  /** the Weakness/resistance type */
  type: Scalars['String']['output'];
  /** the Weakness/resistance modifier (can be 2x or 30+ or nothing) */
  value?: Maybe<Scalars['String']['output']>;
};

export type GetCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCardsQuery = { __typename: 'Query', cards?: Array<{ __typename: 'Card', id: string, abilities?: Array<{ __typename: 'AbilitiesListItem', effect?: string | null, name?: string | null } | null> | null, item?: { __typename: 'Item', effect: string, name: string } | null } | null> | null };


export const GetCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"effect"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"effect"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCardsQuery, GetCardsQueryVariables>;