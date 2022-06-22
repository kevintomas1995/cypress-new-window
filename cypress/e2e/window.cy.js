/// <reference types="cypress" />

const searchQuery = "test";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("winOpen");
      },
    });
    cy.get('a[class="button-link window.open"]').as("winOpenButton");
    cy.get('input[type="text"]').as("input");
  });

  it("window.open should be called", () => {
    cy.get("@winOpenButton").click();

    cy.get("@winOpen").should("be.called");
  });

  it("window.open should be called with correct URL", () => {
    cy.get("@winOpenButton").click();

    cy.get("@winOpen").should(
      "be.calledWith",
      "https://www.google.com/search?q=",
      "_blank"
    );
  });

  it("window.open should be called with correct dynamic URL", () => {
    cy.get("@input").type(searchQuery);
    cy.get("@winOpenButton").click();

    cy.get("@winOpen").should(
      "be.calledWith",
      `https://www.google.com/search?q=${searchQuery}`,
      "_blank"
    );
  });
});
