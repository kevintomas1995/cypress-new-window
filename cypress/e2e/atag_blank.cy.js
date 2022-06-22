/// <reference types="cypress" />

const searchQuery = "test";

describe("example with a tag and target='_blank'", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('a[class="button-link atag_blank"]').as("atag_blank");
    cy.get('input[type="text"]').as("input");
  });

  it("should remove blank and visit", () => {
    cy.get("@atag_blank").invoke("removeAttr", "target").click();

    cy.url().should("include", "https://www.google.com/webhp");
  });

  it("should remove blank and visit dynamic URL", () => {
    cy.get("@input").type(searchQuery);

    cy.get("@atag_blank").invoke("removeAttr", "target").click();

    cy.url().should(
      "include",
      `https://www.google.com/search?q=${searchQuery}`
    );
  });

  it("should have correct href prop", () => {
    cy.get("@atag_blank")
      .should("have.prop", "href", "https://www.google.com/search?q=")
      .should("have.prop", "target", "_blank");
  });

  it("should have correct dynamic href prop", () => {
    cy.get("@input").type(searchQuery);
    cy.get("@atag_blank")
      .should(
        "have.prop",
        "href",
        `https://www.google.com/search?q=${searchQuery}`
      )
      .should("have.prop", "target", "_blank");
  });
});
