/* eslint-disable @typescript-eslint/no-explicit-any */ // FIXME
import { IScalarMock, ITypeMock } from "@graphql-tools/mock"
import { Resolvers } from "src/api/graphql/resolvers"

export type MockResolvers = IMocks<Required<Resolvers>>
export type MockResolver<T extends keyof Resolvers> = ReturnType<Required<MockResolvers>[T]>

/**
 * This is copied & pasted & changed from @graphql-tools/mock, in order to change the type signature so that each
 * top-level resolver object is typed as a function instead of an object.
 *
 * The @graphql-tools/mock library's IMocks type does allow top-level resolvers to be objects,
 * but if they are, their properties *must* be functions, and that is both confusing and very difficult
 * to express as a mapped TypeScript Type.
 *
 * example: trying to mock the name property of Checkpoint
 * Library Supports       Our Type Allows   Mock Object Structure
 *      YES                   YES           { Checkpoint: () => ({ name: () => "My Checkpoint" }) }
 *      YES                   YES           { Checkpoint: () => ({ name: "My Checkpoint" }) }
 *      YES                   NO            { Checkpoint: ({ name: () => "My Checkpoint" }) }
 *      NO                    NO            { Checkpoint: ({ name: "My Checkpoint" }) } // results in null returned for response.data
 *
 * THEREFORE: restricting the type interface to the first two options above is the most straightforward way to a user-friendly type.
 *  */
type IMocks<TResolvers> = {
  [TTypeName in keyof TResolvers]?: () => {
    [TFieldName in keyof TResolvers[TTypeName]]: TResolvers[TTypeName][TFieldName] extends (args: any) => any
    ? () => ReturnType<TResolvers[TTypeName][TFieldName]> | ReturnType<TResolvers[TTypeName][TFieldName]>
    : TResolvers[TTypeName][TFieldName]
  }
}


const a: MockResolvers = { Card: () => ({ attacks: [{ cost: ['2'] }] }) }

const b: MockResolvers = { Card: { attacks: () => [{ cost: ['2'] }] } }

const c: MockResolvers = { Card: () => ({ attacks: () => [{ cost: ['2'] }] }) }