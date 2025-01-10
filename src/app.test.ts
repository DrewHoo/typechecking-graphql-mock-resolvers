import { expect, test } from 'vitest'
import { graphql } from "src/api/graphql";
import { createMockData } from 'src/api/mock-data-utils/create-mock-data'
import { app, GetCardsDocument } from './app'

test('app', () => {
    const data = createMockData(GetCardsDocument, {
        Query: () => ({ cards: () => [{abilities: [{ effect: "paralyzed"}]}]})
    })
    const result = app(data)
    expect(result).toBe("paralyzed")
})
