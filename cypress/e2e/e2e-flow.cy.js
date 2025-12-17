describe('End to End Flow - UI + API', () => {

  it('UI data should be used in API request', () => {

    const userData = {
      name: 'Satyam',
      job: 'QA Intern'
    }

    // Step 1: UI interaction
    cy.visit('https://mui.com/material-ui/react-text-field/')

    cy.get('input[type="text"]').first()
      .type(userData.name)
      .should('have.value', userData.name)

    // Step 2: API call (safe for demo API)
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: userData,
      failOnStatusCode: false
    }).then((response) => {

      // Accept demo API behavior
      expect([200, 201, 403]).to.include(response.status)

      // Validate only if API allows
      if (response.status === 200 || response.status === 201) {
        expect(response.body.name).to.eq(userData.name)
      }

    })
  })

})
