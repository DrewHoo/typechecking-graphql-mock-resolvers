import { Resolvers } from "src/api/graphql/resolvers"

export type MockResolvers = IMocks<Required<Resolvers>>
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

/**
 * This is copied & pasted & changed from @graphql-tools/mock, in order to change the type signature so that each
 * top-level resolver object is typed as a function instead of an object.
 *
 * The @graphql-tools/mock library's IMocks type does allow top-level resolvers to be objects,
 * but if they are, their properties *must* be functions, and that is both confusing and very difficult
 * to express as a mapped TypeScript Type.
 *
 * example: trying to mock the name property of a Card
 * Library Supports       Our Type Allows   Mock Object Structure
 *      YES                   YES           { Card: () => ({ name: () => "Pikachu" }) }
 *      YES                   YES           { Card: () => ({ name: "Pikachu" }) }
 *      YES                   NO            { Card: ({ name: () => "Pikachu" }) } // open an issue if you can figure out how to construct the type that accepts this!
 *      NO                    NO            { Card: ({ name: "Pikachu" }) } // results in null returned for response.data
 *
 * THEREFORE: restricting the type interface to the first two options above is the most straightforward way to a user-friendly type.
 *  */
type IMocks<TResolvers> = {
  [TTypeName in keyof TResolvers]?: (() => {
    [TFieldName in keyof TResolvers[TTypeName]]: TResolvers[TTypeName][TFieldName] extends (...args: any) => any
    ? (() => ReturnType<TResolvers[TTypeName][TFieldName]>) | ReturnType<TResolvers[TTypeName][TFieldName]>
    : TResolvers[TTypeName][TFieldName];
  })
}


const a: MockResolvers = { Card: () => ({ item: { effect: "paralyzed" } }) }

const b: MockResolvers = { Card: () => ({ item: () => ({ effect: "paralyzed" }) }) }

// @ts-expect-error this type would work, but it is very hard to construct a type for
const c: MockResolvers = { Card: { item: () => ({ effect: "paralyzed" }) } }

// @ts-expect-error this type will not work with @graphql-tools/mock
const d: MockResolvers = { Card: { item: { effect: "paralyzed" } } }

// @ts-expect-error this property is not actually part of our schema!
const e: MockResolvers = { A: { b: () => "asdfg" } }
