const _ = Cypress._;

describe("About view", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.signIn();
    cy.get('a[href="/about"]')
      .first()
      .click();
  });

  afterEach(() => {
    cy.signOut();
  });

  it("has a main heading", () => {
    cy.contains("h1", "About ProductStory");
  });
});
