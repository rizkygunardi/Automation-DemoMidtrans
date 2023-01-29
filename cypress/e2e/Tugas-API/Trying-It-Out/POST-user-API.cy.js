/// <reference types="cypress" />

describe("Testing Block Trying It Out", () => {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  it("Testing POST Create new users", () => {
    cy.request({
      headers: {
        authorization:
          "Bearer c8874ee97bf062ad5cbec827c28b98e53c5d11fc35fa05ba9b3de38549f4daeb",
      },
      failOnStatusCode: false,
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      body: {
        id: 34535,
        name: "Rizky Gunardi",
        email: makeid(5) + "@email.com",
        gender: "male",
        status: "active",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
