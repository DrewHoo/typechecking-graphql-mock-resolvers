import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        // "https://api.tcgdex.net/v2/graphql",
        "src/api/graphql/schema.graphql"
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
                makeResolverTypeCallable: true,
                customResolverFn: "TResult",
                contextType: "Record<string, never>",
                resolverTypeWrapperSignature: "Callable<RecursivePartial<T>>",
                wrapFieldDefinitions: true,
                fieldWrapperValue: 'T | (() => T)',
            },
            plugins: [
                "typescript",
                "typescript-resolvers",
                { add: { content: "/* eslint-disable */" } },
                { add: { content: "type RecursivePartial<T> = T extends object ? { [K in keyof T]?: RecursivePartial<T[K]> } : T" } },
                { add: { content: "type Callable<T> = () => T" } },
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
