/// <reference types="cypress" />

describe("Testing Block Trying It Out", () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  it("Testing Delete users", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "DELETE",
      url: "https://gorest.co.in/public/v2/users/" + getRndInteger(200, 2000),
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
