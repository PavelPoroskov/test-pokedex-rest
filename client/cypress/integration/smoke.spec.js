import cy from 'cypress'

describe('My App', () => {
  it('loads', () => {
    cy.visit('/')
    cy.get('h1').contains('Hello World from test-pokedex-rest-client')
  })
})
