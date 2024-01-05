it("POST API testing Using Cypress API Plugin", () => {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "Moe Moe",
      job: "QA",
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
 });