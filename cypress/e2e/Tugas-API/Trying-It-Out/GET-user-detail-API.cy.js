/// <reference types="cypress" />

describe("Testing Block Trying It Out", () => {
  it("Testing GET user details", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/522",
    }).as("users");
    cy.get("@users").its("status").should("equal", 200);
  });
});
