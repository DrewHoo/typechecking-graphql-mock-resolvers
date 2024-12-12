import { ExecutionResult, GraphQLSchema, executeSync, buildASTSchema  } from "graphql"
import { addMocksToSchema } from "@graphql-tools/mock"
import { TypedDocumentNode, VariablesOf } from "@graphql-typed-document-node/core"
import { addTypenameToDocument, getOperationName } from "apollo-utilities"
import { MockResolvers } from "src/api/mock-data-utils/mock-resolvers"
import SDL from "src/api/graphql/schema.graphql"

const schema = buildASTSchema(SDL)

export function createMockData<TData = any, TVariables extends Record<string, never> = Record<string, never>>(
    document: TypedDocumentNode<TData, TVariables>,
    mocks: MockResolvers,
): TData

export function createMockData<TData = any, TVariables extends Record<string, unknown> = Record<string, any>>(
    document: TypedDocumentNode<TData, TVariables>,
    mocks: MockResolvers,
    args: VariablesOf<TypedDocumentNode<TData, TVariables>>,
): TData

export function createMockData<TData = any, TVariables extends Record<string, unknown> = Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    mocks: MockResolvers,
    args?: VariablesOf<TypedDocumentNode<TData, TVariables>> extends Record<string, never>
        ? undefined
        : VariablesOf<TypedDocumentNode<TData, TVariables>>,
): TData {
    const documentNodeWithTypeName = addTypenameToDocument(document)
    const mockedSchema = addMocksToSchema({
        schema,
        mocks: {
            ...mocks,
        },
    })
    const result = wrappedExecute(mockedSchema, documentNodeWithTypeName, args)
    if (!result.data) {
        throw new Error(
            `Could not create mock data for ${getOperationName(document)}. See errors: ${JSON.stringify(result.errors)}`,
        )
    }
    return result.data
}

function wrappedExecute<TData = any, TVariables extends Record<string, unknown> = Record<string, any>>(
    schema: GraphQLSchema,
    document: TypedDocumentNode<TData, TVariables>,
    args?: VariablesOf<TypedDocumentNode<TData, TVariables>>,
) {
    return executeSync({ schema, document, variableValues: args }) as ExecutionResult<TData>
}