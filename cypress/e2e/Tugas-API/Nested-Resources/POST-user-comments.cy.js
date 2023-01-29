/// <reference types="cypress" />

describe("Testing Block Nested Resources", () => {
  it("Testing POST Creates a post comment", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "POST",
      url: "https://gorest.co.in/public/v2/posts/517/comments",
      body: {
        id: 1847,
        post_id: 1124,
        name: "Rizky gunardi",
        email: "rg@email.com",
        body: "Tetap Semangat Guys.",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
