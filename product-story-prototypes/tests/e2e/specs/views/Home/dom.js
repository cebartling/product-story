const _ = Cypress._;

describe("Home view", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.signIn();
    cy.get('a[href="/home"]')
      .first()
      .click();
  });

  afterEach(() => {
    cy.signOut();
  });

  it("has a main heading", () => {
    cy.contains("h1", "Home");
  });
});
