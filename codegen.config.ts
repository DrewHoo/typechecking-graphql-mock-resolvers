import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        "https://api.tcgdex.net/v2/graphql"
    ],
    documents: ["src/**/*.graphql", "!src/api/*", "src/**/*.tsx", "src/**/*.ts"],
    config: {
        namingConvention: {
            enumValues: "keep",
            namingConvention: "keep",
        },
        enumsAsTypes: true,
        nonOptionalTypename: true,
        strictScalars: true,
    },
    generates: {
        "src/api/graphql/schema.graphql": {
            plugins: ["schema-ast"],
        },
        "src/api/graphql/resolvers.ts": {
            config: {
                // makeResolverTypeCallable: true,
                customResolverFn: "(() => TResult) | TResult",
                resolverTypeWrapperSignature: "RecursivePartial<T>",
                allResolversTypeName: "Resolvers",
                namespacedImportName: "Types",
            },
            plugins: [
                "typescript-resolvers",
                { add: { content: "/* eslint-disable */" } },
                { add: { content: "type RecursivePartial<T> = T extends object ? { [K in keyof T]?: RecursivePartial<T[K]> } : T" } },
                { add: { content: "import * as Types from 'src/api/graphql/graphql';" } },
            ],
        },
        "src/api/graphql/": {
            preset: "client",
            config: {
                enumsAsTypes: true,
            },
            presetConfig: {
                fragmentMasking: { unmaskFunctionName: "unmaskFragment" },
            },
        },
    },
}

export default config
