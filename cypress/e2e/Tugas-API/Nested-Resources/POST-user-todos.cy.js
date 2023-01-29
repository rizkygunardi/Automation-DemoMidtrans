/// <reference types="cypress" />

describe("Testing Block Nested Resources", () => {
  it("Testing POST Creates a user todo", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/527/todos",
      body: {
        id: 271,
        user_id: 517,
        title: "Assentator creo eos et tubineus sufficio earum.",
        due_on: "2022-12-27T00:00:00.000+05:30",
        status: "pending",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
