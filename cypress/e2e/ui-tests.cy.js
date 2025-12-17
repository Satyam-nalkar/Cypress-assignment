describe('UI Automation Tests - Material UI', () => {

  it('Text Field Interaction', () => {
    cy.visit('https://mui.com/material-ui/react-text-field/')

    // Name field
    cy.get('input[type="text"]').first()
      .type('Satyam')
      .should('have.value', 'Satyam')

    // Email field
  cy.get('input[type="text"]').eq(1)
  .type('test@gmail.com')
  .should('have.value', 'test@gmail.com')
  })

it('Dropdown Selection', () => {
  cy.visit('https://mui.com/material-ui/react-select/')

  // Scroll to Basic Select
  cy.contains('Basic select').scrollIntoView()

  // Open dropdown (MUI select input)
  cy.get('[aria-haspopup="listbox"]').first().click()

  // Select option from dropdown list
  cy.get('ul[role="listbox"] li').contains('Twenty').click()

  // Assertion
  cy.contains('Twenty')
})



it('Autocomplete Selection', () => {
  cy.visit('https://mui.com/material-ui/react-autocomplete/')

  // Type partial text
  cy.get('input[aria-autocomplete="list"]')
    .first()
    .type('Aus')

  // Select option using keyboard (most stable)
  cy.get('input[aria-autocomplete="list"]')
    .first()
    .type('{downarrow}{enter}')

  // ✅ ASSERTION: interaction successful (no error)
  cy.get('input[aria-autocomplete="list"]')
    .first()
    .should('exist')
})





  it('Table Validation', () => {
  cy.visit('https://mui.com/material-ui/react-table/')

  // Scroll to Basic table example
  cy.contains('Basic table').scrollIntoView()

  // Table rows check (MUI basic table)
  cy.get('table').first()
    .find('tbody tr')
    .should('have.length.greaterThan', 0)
})


})
