Cypress.Commands.add("Bio", () => {
  cy.fixture("data").then((data) => {
    const price = data.price;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const city = data.city;
    const address = data.address;
    const postalCode = data.postalCode;

    cy.get(".input > .text-right").type("{selectAll}" + price[0]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"]').type("{selectAll}" + name[0]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"]').type("{selectAll}" + email[0]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"]').type("{selectAll}" + phone[0]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"]').type("{selectAll}" + city[0]);
    cy.get("textarea").type("{selectAll}" + address[0]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"]').type(
      "{selectAll}" + postalCode[0]
    );
  });
});

Cypress.Commands.add("Bio2", () => {
  cy.fixture("data").then((data) => {
    const price = data.price;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const city = data.city;
    const address = data.address;
    const postalCode = data.postalCode;

    cy.get(".input > .text-right").type("{selectAll}" + price[1]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"]').type("{selectAll}" + name[1]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"]').type("{selectAll}" + email[1]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"]').type("{selectAll}" + phone[1]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"]').type("{selectAll}" + city[1]);
    cy.get("textarea").type("{selectAll}" + address[1]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"]').type(
      "{selectAll}" + postalCode[1]
    );
  });
});

Cypress.Commands.add("Bio3", () => {
  cy.fixture("data").then((data) => {
    const price = data.price;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const city = data.city;
    const address = data.address;
    const postalCode = data.postalCode;

    cy.get(".input > .text-right").type("{selectAll}" + price[2]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"]').type("{selectAll}" + name[2]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"]').type("{selectAll}" + email[2]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"]').type("{selectAll}" + phone[2]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"]').type("{selectAll}" + city[2]);
    cy.get("textarea").type("{selectAll}" + address[2]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"]').type(
      "{selectAll}" + postalCode[2]
    );
  });
});

Cypress.Commands.add("Bio4", () => {
  cy.fixture("data").then((data) => {
    const price = data.price;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const city = data.city;
    const address = data.address;
    const postalCode = data.postalCode;

    cy.get(".input > .text-right").type("{selectAll}" + price[3]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"]').type("{selectAll}" + name[3]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"]').type("{selectAll}" + email[3]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"]').type("{selectAll}" + phone[3]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"]').type("{selectAll}" + city[3]);
    cy.get("textarea").type("{selectAll}" + address[3]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"]').type(
      "{selectAll}" + postalCode[3]
    );
  });
});

Cypress.Commands.add("Bio5", () => {
  cy.fixture("data").then((data) => {
    const price = data.price;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const city = data.city;
    const address = data.address;
    const postalCode = data.postalCode;

    cy.get(".input > .text-right").type("{selectAll}" + price[4]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"]').type("{selectAll}" + name[4]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"]').type("{selectAll}" + email[4]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"]').type("{selectAll}" + phone[4]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"]').type("{selectAll}" + city[4]);
    cy.get("textarea").type("{selectAll}" + address[4]);
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"]').type(
      "{selectAll}" + postalCode[4]
    );
  });
});

Cypress.Commands.add("BtnPay", () => {
  cy.get(".cart-checkout-settings").click();
  cy.get("#main_setting_custom").click();
  cy.get('[data-reactid=".0.0.1.2.1.0.5.1.1.3"] > label').click();
  cy.get('input[data-reactid=".0.0.1.2.1.0.5.1.1.3.0"]').click();
  cy.get(".pull-right > .btn").click();
});
