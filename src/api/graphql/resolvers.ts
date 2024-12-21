import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import * as Types from 'src/api/graphql/graphql';
export type ResolverFn<TResult, TParent, TContext, TArgs> = TResult | (() => TResult)
type RecursivePartial<T> = T extends object ? { [K in keyof T]?: RecursivePartial<T[K]> } : T


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
) => Types.Maybe<TTypes> | Promise<Types.Maybe<TTypes>>;

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
  AbilitiesListItem: ResolverTypeWrapper<Types.AbilitiesListItem>;
  AttacksListItem: ResolverTypeWrapper<Types.AttacksListItem>;
  Boolean: ResolverTypeWrapper<Types.Scalars['Boolean']['output']>;
  Card: ResolverTypeWrapper<Types.Card>;
  CardCount: ResolverTypeWrapper<Types.CardCount>;
  CardsFilters: Types.CardsFilters;
  DateTime: ResolverTypeWrapper<Types.Scalars['DateTime']['output']>;
  ID: ResolverTypeWrapper<Types.Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Types.Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Types.Item>;
  Legal: ResolverTypeWrapper<Types.Legal>;
  Pagination: Types.Pagination;
  Query: ResolverTypeWrapper<{}>;
  Serie: ResolverTypeWrapper<Types.Serie>;
  SerieFilters: Types.SerieFilters;
  Set: ResolverTypeWrapper<Types.Set>;
  SetFilters: Types.SetFilters;
  Sort: Types.Sort;
  String: ResolverTypeWrapper<Types.Scalars['String']['output']>;
  StringEndpoint: ResolverTypeWrapper<Types.StringEndpoint>;
  Variants: ResolverTypeWrapper<Types.Variants>;
  WeakResListItem: ResolverTypeWrapper<Types.WeakResListItem>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AbilitiesListItem: Types.AbilitiesListItem;
  AttacksListItem: Types.AttacksListItem;
  Boolean: Types.Scalars['Boolean']['output'];
  Card: Types.Card;
  CardCount: Types.CardCount;
  CardsFilters: Types.CardsFilters;
  DateTime: Types.Scalars['DateTime']['output'];
  ID: Types.Scalars['ID']['output'];
  Int: Types.Scalars['Int']['output'];
  Item: Types.Item;
  Legal: Types.Legal;
  Pagination: Types.Pagination;
  Query: {};
  Serie: Types.Serie;
  SerieFilters: Types.SerieFilters;
  Set: Types.Set;
  SetFilters: Types.SetFilters;
  Sort: Types.Sort;
  String: Types.Scalars['String']['output'];
  StringEndpoint: Types.StringEndpoint;
  Variants: Types.Variants;
  WeakResListItem: Types.WeakResListItem;
};

export type LocaleDirectiveArgs = {
  lang: Types.Scalars['String']['input'];
};

export type LocaleDirectiveResolver<Result, Parent, ContextType = any, Args = LocaleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbilitiesListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilitiesListItem'] = ResolversParentTypes['AbilitiesListItem']> = {
  effect?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttacksListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttacksListItem'] = ResolversParentTypes['AttacksListItem']> = {
  cost?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  damage?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effect?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = {
  abilities?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['AbilitiesListItem']>>>, ParentType, ContextType>;
  attacks?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['AttacksListItem']>>>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  datePublished?: Resolver<Types.Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dexId?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  effect?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energyType?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evolveFrom?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hp?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  illustrator?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Types.Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  legal?: Resolver<ResolversTypes['Legal'], ParentType, ContextType>;
  level?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  localId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regulationMark?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resistances?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['WeakResListItem']>>>, ParentType, ContextType>;
  retreat?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  stage?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trainerType?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  types?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  variants?: Resolver<Types.Maybe<ResolversTypes['Variants']>, ParentType, ContextType>;
  weaknesses?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['WeakResListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CardCount'] = ResolversParentTypes['CardCount']> = {
  firstEd?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holo?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  normal?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  official?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reverse?: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LegalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Legal'] = ResolversParentTypes['Legal']> = {
  expanded?: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  standard?: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  card?: Resolver<Types.Maybe<ResolversTypes['Card']>, ParentType, ContextType, Partial<Types.QueryCardArgs>>;
  cards?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Card']>>>, ParentType, ContextType, Partial<Types.QueryCardsArgs>>;
  serie?: Resolver<Types.Maybe<ResolversTypes['Serie']>, ParentType, ContextType, Partial<Types.QuerySerieArgs>>;
  series?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Serie']>>>, ParentType, ContextType, Partial<Types.QuerySeriesArgs>>;
  set?: Resolver<Types.Maybe<ResolversTypes['Set']>, ParentType, ContextType, Partial<Types.QuerySetArgs>>;
  sets?: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Set']>>>, ParentType, ContextType, Partial<Types.QuerySetsArgs>>;
};

export type SerieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Serie'] = ResolversParentTypes['Serie']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sets?: Resolver<Array<Types.Maybe<ResolversTypes['Set']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = {
  cardCount?: Resolver<ResolversTypes['CardCount'], ParentType, ContextType>;
  cards?: Resolver<Array<Types.Maybe<ResolversTypes['Card']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serie?: Resolver<ResolversTypes['Serie'], ParentType, ContextType>;
  symbol?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tcgOnline?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringEndpointResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringEndpoint'] = ResolversParentTypes['StringEndpoint']> = {
  cards?: Resolver<Array<Types.Maybe<ResolversTypes['Card']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Variants'] = ResolversParentTypes['Variants']> = {
  firstEdition?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  holo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  normal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reverse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wPromo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeakResListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeakResListItem'] = ResolversParentTypes['WeakResListItem']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AbilitiesListItem?: AbilitiesListItemResolvers<ContextType>;
  AttacksListItem?: AttacksListItemResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  CardCount?: CardCountResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  Legal?: LegalResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Serie?: SerieResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  StringEndpoint?: StringEndpointResolvers<ContextType>;
  Variants?: VariantsResolvers<ContextType>;
  WeakResListItem?: WeakResListItemResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  locale?: LocaleDirectiveResolver<any, any, ContextType>;
};
