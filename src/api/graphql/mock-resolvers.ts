import { Resolvers } from "src/api/graphql/resolvers"

export type MockResolvers = IMocks2<Required<Resolvers>>
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type IMocks2<TResolvers> = {
  [TTypeName in keyof TResolvers]?: (() => {
    [TFieldName in keyof TResolvers[TTypeName]]: TResolvers[TTypeName][TFieldName] extends (...args: any) => any
    ? (() => ReturnType<TResolvers[TTypeName][TFieldName]>) | ReturnType<TResolvers[TTypeName][TFieldName]>
    : TResolvers[TTypeName][TFieldName];
  })
}


const a: MockResolvers = { Card: () => ({ item: { effect: "paralyzed" } }) }

const b: MockResolvers = { Card: () => ({ item: () => ({ effect: "paralyzed" }) }) }

// @ts-expect-error this type would work, but it is very hard to type
const c: MockResolvers = { Card: { item: () => ({ effect: "paralyzed" }) } }

// @ts-expect-error this type will not work with @graphql-tools/mock
const d: MockResolvers = { Card: { item: { effect: "paralyzed" } } }

// @ts-expect-error this property is not actually part of our schema!
const e: MockResolvers = { A: { b: () => "asdfg" } }
