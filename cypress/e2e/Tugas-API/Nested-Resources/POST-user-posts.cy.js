/// <reference types="cypress" />

describe("Testing Block Nested Resources", () => {
  it("Testing POST Creates a user post", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/527/posts",
      body: {
        id: 271,
        user_id: 527,
        title: "Rizky Gunardi",
        body: "Tetap semangat belajar - Quality Assurance Eduwork",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
