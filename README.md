# typechecking-graphql-mock-resolvers

This repo exists to provide real, runnable examples for this blog post [How to write simple, expressive, and powerful test fixtures for GraphQL applications](https://drewhoover.com/how-to-write-simple-expressive-and-powerful-test-fixtures-for-graphql-applications)
The goal is best summarized by a gif of me using a typechecked mocking interface to easily create mocked query results:
![2024-12-27 11 46 55](https://github.com/user-attachments/assets/94c7f733-ee33-4c32-90c0-b55a949b4bb5)


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
