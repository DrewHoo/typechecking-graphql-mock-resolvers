# typechecking-graphql-mock-resolvers

This repo exists to provide real, runnable examples for this blog post [How to type-check mock resolvers](https://drewhoover.com/posts/how-to-typecheck-mock-resolvers/)

## Getting Started
#### Install Dependencies
```bash
$ pnpm install
```

#### Run codegen
```
$ pnpm codegen
```

Note: `schema.graphql` was generated with the `schema-ast` plugin, so that subsequent codegen commands can be easier to understand, 
and so that the examples never break should the API change =)

#### Run tests
```
$ pnpm test
```

## Notes
Thanks to [TCGDex](https://api.tcgdex.net/v2/graphql) for providing a public GraphQL API!
