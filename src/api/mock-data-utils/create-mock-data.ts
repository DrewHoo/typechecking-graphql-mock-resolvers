import { ExecutionResult, executeSync, buildASTSchema } from "graphql"
import { addMocksToSchema } from "@graphql-tools/mock"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"
import { addTypenameToDocument, getOperationName } from "apollo-utilities"
import { MockResolvers } from "src/api/mock-data-utils/mock-resolvers"
import SDL from "src/api/graphql/schema.graphql"

const schema = buildASTSchema(SDL)

const globalMocks: MockResolvers = {
    DateTime: () => new Date().toISOString()
}

export function createMockData<TData, TVariables extends Record<string, unknown> = Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    mocks: MockResolvers,
): TData {
    const documentNodeWithTypeName = addTypenameToDocument(document)
    const executableSchema = addMocksToSchema({
        schema,
        mocks: {
            ...globalMocks,
            ...mocks,
        },
    })
    const result = executeSync({ schema: executableSchema, document: documentNodeWithTypeName }) as ExecutionResult<TData>
    if (!result.data) {
        throw new Error(
            `Could not create mock data for ${getOperationName(document)}. See errors: ${JSON.stringify(result.errors)}`,
        )
    }
    return result.data 
}
