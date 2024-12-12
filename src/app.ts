import { ResultOf } from "@graphql-typed-document-node/core";
import { graphql } from "src/api/graphql";

export const GetCardsDocument = graphql(`
    query GetCards {
        cards {
            id
            abilities {
                effect
                name
            }
            item {
                effect
                name
            }
        }
    }
`)

export function app(data: ResultOf<typeof GetCardsDocument>) {
    return data.cards?.[0]?.abilities?.[0]?.effect
}