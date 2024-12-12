import graphqlLoader from "vite-plugin-graphql-loader"
import { defineConfig } from "vitest/config"

export default () => {
  return defineConfig({
    plugins: [graphqlLoader()],
    resolve: {
      alias: {
        graphql: "graphql/index.js",
      },
    },
  })
}
