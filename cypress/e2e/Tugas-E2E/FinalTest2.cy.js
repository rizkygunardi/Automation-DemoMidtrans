/// <reference types="cypress" />

describe("Testing e2e Finaltest Eduwork", () => {
  beforeEach(() => {
    cy.visit("https://demo.midtrans.com/");
    cy.url().should("include", "midtrans.com");
    cy.get(".buy").click();
  });
  it("Testing TC001 BRI PASS", () => {
    cy.Bio();
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
        cy.visit(
          "https://simulator.sandbox.midtrans.com/openapi/va/index?bank=bri"
        );
        cy.get("h1").should("contain.text", "OpenApi Virtual Account");
        cy.get("#inputMerchantId").type(`${txt}`);
      });
    cy.get(".btn").click();
    cy.wait(3000);
    cy.get(".btn").click();
    cy.get(".alert").should("include.text", "Success! Success Payment VA");
  });

  it("Testing TC002 BRI Fail", () => {
    cy.Bio();
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
        cy.visit(
          "https://simulator.sandbox.midtrans.com/openapi/va/index?bank=bri"
        );
        cy.get("h1").should("contain.text", "OpenApi Virtual Account");
        cy.get("#inputMerchantId").type("077438934255560853");
        cy.get(".btn").click();
        cy.wait(3000);
        cy.get(".alert").should(
          "contain.text",
          "Invalid Bill/Virtual Account not found"
        );
      });
  });

  it("Testing TC003 BNI PASS", () => {
    cy.Bio2();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(3) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find('[href="#/bank-transfer/bni-va"] > .payment-page-text')
      .click();
    cy.wait(5000);
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
    cy.get(".btn").click();
    cy.get(".alert").should("include.text", "Payment Success");
  });

  it("Testing TC004 BNI FAIL", () => {
    cy.Bio2();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(3) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find('[href="#/bank-transfer/bni-va"] > .payment-page-text')
      .click();
    cy.wait(5000);
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find("#vaField")
      .then(($temp) => {
        const txt = $temp.text();
        cy.wait(500);
        cy.visit("https://simulator.sandbox.midtrans.com/bni/va/index");
        cy.get("h1").should("contain.text", "BNI Virtual Account");
        cy.get("#inputMerchantId").type("9880712349818721");
      });
    cy.get(".btn").click();
    cy.get(".alert").should(
      "include.text",
      "Invalid VA number. / Nomor VA tidak valid."
    );
  });

  it("Testing TC005 Gopay PASS", () => {
    cy.Bio3();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(2) > [data-testid="list-item"]')
      .click();
    cy.wait(5000);
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(".title-text")
      .should("contain.text", "GoPay");
    cy.visit("https://simulator.sandbox.midtrans.com/qris/index");
    cy.get("h1").should("contain.text", "QRIS");
    cy.get("#qrCodeUrl").type(
      "https://api.sandbox.midtrans.com/v2/qris/fec3ef7e-7dd1-4ea5-a068-acdb1c8b5936/qr-code"
    );
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(".alert").should("include.text", "Transaction is Successful");
  });

  it("Testing TC006 Gopay Fail", () => {
    cy.Bio3();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(2) > [data-testid="list-item"]')
      .click();
    cy.wait(5000);
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(".title-text")
      .should("contain.text", "GoPay");
    cy.visit("https://simulator.sandbox.midtrans.com/qris/index");
    cy.get("h1").should("contain.text", "QRIS");
    cy.get("#qrCodeUrl").type(
      "https://api.sandbox.midtrans.com/v2/qris/fec3ef7e-7dd1-4ea5-a068-acdb1c8b5936/"
    );
    cy.get(".btn").click();
    cy.get(".alert").should("include.text", "Unparsable QR");
  });

  it("Testing TC007 Akulaku PASS", () => {
    cy.Bio4();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(9) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(".page-title")
      .should("contain.text", "Akulaku PayLater");
    cy.visit(
      "https://simulator.sandbox.midtrans.com/akulaku/ui/login?appId=82728746&refNo=210dfede-7315-4b8a-8054-4d4160581607&sign=q_FRyF2XOFCMCAqR4DRaVyKp7wqlpwrqzvZLf_iWtC_DSRsU7ociGjiFsp6RdfzxxE26BSM4ZzfLwc65cL4Vuw&lang=id"
    );
    cy.get("h1").should("contain.text", "Akulaku");
    cy.get("#phoneNumber").type("08122222222");
    cy.get(".btn").click();
    cy.wait(2000);
    cy.get(".btn").click();
    cy.get(".alert").should("include.text", "Transaction is Successful");
  });

  it("Testing TC008 Akulaku FAIL", () => {
    cy.Bio4();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(9) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(".page-title")
      .should("contain.text", "Akulaku PayLater");
    cy.visit(
      "https://simulator.sandbox.midtrans.com/akulaku/ui/login?appId=82728746&refNo=210dfede-7315-4b8a-8054-4d4160581607&sign=q_FRyF2XOFCMCAqR4DRaVyKp7wqlpwrqzvZLf_iWtC_DSRsU7ociGjiFsp6RdfzxxE26BSM4ZzfLwc65cL4Vuw&lang=id"
    );
    cy.get("h1").should("contain.text", "Akulaku");
    cy.get("#phoneNumber").type("08144444444");
    cy.get(".btn").click();
    cy.wait(2000);
    cy.get(".btn").click();
    cy.get(".alert").should("include.text", "Transaction is Denied");
  });

  it("Testing TC009 Indomart PASS", () => {
    cy.Bio5();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(8) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find("#payment-code")
      .then(($temp) => {
        const txt = $temp.text();
        cy.wait(500);
        cy.visit("https://simulator.sandbox.midtrans.com/indomaret/index");
        cy.get("h1").should("contain.text", "Indomaret MidPlaza 2");
        cy.get("#payment_code").type(`${txt}`);
      });
    cy.get(".btn").click();
    cy.wait(2000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.get(".alert").should("include.text", "Success Transaction");
    cy.get(".btn").click();
    cy.wait(1000);
    cy.get(".alert").should("include.text", "Success Reversal");
  });

  it("Testing TC010 Indomart FAIL", () => {
    cy.Bio5();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find(':nth-child(8) > [data-testid="list-item"]')
      .click();
    cy.get("#snap-midtrans")
      .its("0.contentDocument.body")
      .find("#payment-code")
      .then(($temp) => {
        const txt = $temp.text();
        cy.wait(500);
        cy.visit("https://simulator.sandbox.midtrans.com/indomaret/index");
        cy.get("h1").should("contain.text", "Indomaret MidPlaza 2");
        cy.get("#payment_code").type(`137541033402421`);
      });
    cy.get(".btn").click();
    cy.wait(500);
    cy.get(".alert").should("include.text", "Something went wrong");
  });
});
