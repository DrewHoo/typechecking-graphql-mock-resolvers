import { CodegenConfig } from "@graphql-codegen/cli"

export default {
    overwrite: true,
    schema: [
        // "https://api.tcgdex.net/v2/graphql", // use this instead of the static schema below if you want to get fresh types
        "src/api/graphql/schema.graphql"
    ],
    documents: ["src/**/*.graphql", "!src/api/*", "src/**/*.tsx", "src/**/*.ts"],
    generates: {
        "src/api/graphql/schema.graphql": { plugins: ["schema-ast"] },
        "src/api/graphql/resolvers.ts": {
            config: {
                makeResolverTypeCallable: true,
                customResolverFn: "TResult | (() => TResult)",
                resolverTypeWrapperSignature: "RecursivePartial<T>",
                namespacedImportName: "Types",
            },
            plugins: [
                "typescript-resolvers",
                { add: { content: "type RecursivePartial<T> = T extends object ? { [K in keyof T]?: RecursivePartial<T[K]> } : T" } },
                { add: { content: "import * as Types from 'src/api/graphql/graphql';" } },
            ],
        },
        "src/api/graphql/": {
            preset: "client",
            config: {
                scalars: {
                    DateTime: "string"
                },
            },
            presetConfig: { fragmentMasking: false },
        },
    },
} satisfies CodegenConfig
