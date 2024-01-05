describe("Get Method", function(){

  it("cypress comments list" , function(){

  cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {

  }).then((resp) => {

  expect(resp.status).to.eq(200)

  expect(resp).to.have.property('headers')

  expect(resp).to.have.property('duration')

  });

  })

  })