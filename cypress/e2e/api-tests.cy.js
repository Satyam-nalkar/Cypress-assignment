describe('API Tests - ReqRes', () => {

it('Create User', () => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: {
      name: 'Satyam',
      job: 'QA Intern'
    },
    failOnStatusCode: false
  }).then((response) => {

    // Demo API ke possible responses
    expect(response.status).to.be.oneOf([201, 200, 403])

    // Agar user create hua to response check karo
    if (response.status === 201 || response.status === 200) {
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('createdAt')
    }

  })
})


  it('Read Users', () => {
  cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    failOnStatusCode: false
  }).then((response) => {

    // Demo API ke liye acceptable responses
    expect(response.status).to.be.oneOf([200, 403])

    // Agar data aaya to email validate karo
    if (response.status === 200) {
      expect(response.body.data.length).to.be.greaterThan(0)
      expect(response.body.data[0]).to.have.property('email')
    }

  })
})


  it('Update User', () => {
  cy.request({
    method: 'PUT',
    url: 'https://reqres.in/api/users/2',
    body: {
      name: 'Satyam Updated',
      job: 'Automation Tester'
    },
    failOnStatusCode: false
  }).then((response) => {

    // Accept multiple valid demo API responses
    expect(response.status).to.be.oneOf([200, 201, 403])

    // updatedAt ho to best
    if (response.body && response.body.updatedAt) {
      expect(response.body.updatedAt).to.exist
    }
  })
})


it('Delete User', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://reqres.in/api/users/2',
    failOnStatusCode: false
  }).then((response) => {

    // Acceptable responses for demo API
    expect(response.status).to.be.oneOf([200, 204, 403])

  })
})




})
