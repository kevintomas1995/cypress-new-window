/// <reference types="cypress" />

describe("basic tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the two buttons", () => {
    cy.get('a[class="button-link atag_blank"]').should(
      "have.text",
      "aTag_blank"
    );

    cy.get('a[class="button-link window.open"]').should(
      "have.text",
      "window.open"
    );
  });

  it("displays the input field", () => {
    cy.get('input[type="text"]');
  });
});
