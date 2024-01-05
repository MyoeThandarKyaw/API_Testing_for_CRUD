describe("Post Method", function(){

    it("Test post url", function(){

    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {

    title: 'Cypress',

    body: 'Automation Tool',

    }).then(resp => {

    expect(resp).to.have.property("headers");

    expect(resp.body).to.have.property("title");

    expect(resp.body).to.have.property("title", "Cypress");

    });

    })

    });