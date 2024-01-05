it("PUT API testing Using Flip Plugin", () => {
    cy.request("PUT", "https://reqres.in/api/users/2", {
      name: "Soe Soe",
      job: "QA Automation Engineer",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });