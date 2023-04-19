/// <reference types="cypress" />

describe("Testing e2e Finaltest Eduwork", () => {
  beforeEach(() => {
    cy.visit("https://demo.midtrans.com/");
    cy.url().should("include", "midtrans.com");
    cy.get(".buy").click();
  });
  it("Testing TC001 BRI PASS", () => {
    cy.Bio();
    cy.get(".cart-checkout").click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(3) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find('[href="#/bank-transfer/bri-va"] > .payment-page-text')
      .click();
    cy.wait(3000);
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find("#vaField")
      .then(($temp) => {
        const txt = $temp.text();
        cy.wait(500);
        cy.visit("https://simulator.sandbox.midtrans.com/bni/va/index");
        cy.get("h1").should("contain.text", "BNI Virtual Account");
        cy.get("#inputMerchantId").type(`${txt}`);
      });
    cy.get(".btn").click();
    cy.wait(3000);
    cy.get(".alert").should(
      "include.text",
      "Invalid VA number. / Nomor VA tidak valid."
    );
  });
});
