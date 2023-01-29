/// <reference types="cypress" />

describe("Testing Block Trying It Out", () => {
  it("Testing PUT Update users", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "PUT",
      url: "https://gorest.co.in/public/v2/users/527",
      body: {
        id: 34535,
        name: "Rizky Gunardi",
        email: "rg@email.com",
        gender: "male",
        status: "active",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
