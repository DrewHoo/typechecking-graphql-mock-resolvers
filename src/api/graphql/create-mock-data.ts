/* eslint-disable @typescript-eslint/no-explicit-any */ // FIXME
import { ExecutionResult, GraphQLSchema, executeSync } from "graphql"
import { addMocksToSchema } from "@graphql-tools/mock"
import { globalMocks } from "src/api/mocks/global-mocks"
import { schema as schemaSansMocks } from "src/common/utils/graphql"
import { TypedDocumentNode, VariablesOf } from "@graphql-typed-document-node/core"
import { addTypenameToDocument, getOperationName } from "apollo-utilities"

function wrappedExecute<TData = any, TVariables extends Record<string, unknown> = Record<string, any>>(
  schema: GraphQLSchema,
  document: TypedDocumentNode<TData, TVariables>,
  args?: VariablesOf<TypedDocumentNode<TData, TVariables>>,
) {
  return executeSync({ schema, document, variableValues: args }) as ExecutionResult<TData>
}

export function createMockData<TData = any, TVariables extends Record<string, never> = Record<string, never>>(
  document: TypedDocumentNode<TData, TVariables>,
  mocks: MockResolvers,
): TData

export function createMockData<TData = any, TVariables extends Record<string, unknown> = Record<string, any>>(
  document: TypedDocumentNode<TData, TVariables>,
  mocks: MockResolvers,
  // eslint-disable-next-line @typescript-eslint/unified-signatures -- linter and typescript disagree
  args: VariablesOf<TypedDocumentNode<TData, TVariables>>,
): TData

export function createMockData<TData = any, TVariables extends Record<string, unknown> = Record<string, unknown>>(
  document: TypedDocumentNode<TData, TVariables>,
  mocks: MockResolvers,
  args?: VariablesOf<TypedDocumentNode<TData, TVariables>> extends Record<string, never>
    ? undefined
    : VariablesOf<TypedDocumentNode<TData, TVariables>>,
): TData {
  const result = createMockResult(document, mocks, args as any)
  if (!result.data) {
    throw new Error(
      `Could not create mock data for ${getOperationName(document)}. See errors: ${JSON.stringify(result.errors)}`,
    )
  }
  return result.data
}

export function createMockResult<TData = any, TVariables extends Record<string, unknown> = Record<string, unknown>>(
  document: TypedDocumentNode<TData, TVariables>,
  mocks: MockResolvers,
  // eslint-disable-next-line @typescript-eslint/unified-signatures -- linter and typescript disagree
  args: VariablesOf<TypedDocumentNode<TData, TVariables>>,
): ExecutionResult<TData>

export function createMockResult<TData = any, TVariables extends Record<string, never> = Record<string, never>>(
  document: TypedDocumentNode<TData, TVariables>,
  mocks: MockResolvers,
): ExecutionResult<TData>

export function createMockResult<TData = any, TVariables extends Record<string, unknown> = Record<string, unknown>>(
  document: TypedDocumentNode<TData, TVariables>,
  mocks: MockResolvers,
  args?: VariablesOf<TypedDocumentNode<TData, TVariables>> extends Record<string, never>
    ? undefined
    : VariablesOf<TypedDocumentNode<TData, TVariables>>,
): ExecutionResult<TData> {
  const documentNodeWithTypeName = addTypenameToDocument(document)
  const mockedSchema = addMocksToSchema({
    schema: schemaSansMocks,
    mocks: {
      ...globalMocks,
      ...mocks,
    },
  })
  return wrappedExecute(mockedSchema, documentNodeWithTypeName, args)
}
