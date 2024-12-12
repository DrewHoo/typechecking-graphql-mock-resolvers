import { expect, test } from 'vitest'
import { app, GetCardsDocument } from './app'
import { createMockData } from 'src/api/graphql/create-mock-data'

test('app', () => {
    const data = createMockData(GetCardsDocument, { AbilitiesListItem: () => ({ effect: "paralyzed" }) })
    const result = app(data)
    expect(result).toBe("paralyzed")
})