const _ = Cypress._;

describe("User story map view", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.signIn();
    cy.get("button[data-views-button]")
      .first()
      .click();
    cy.get('a[href="/userStoryMap"]')
      .first()
      .click();
  });

  afterEach(() => {
    cy.signOut();
  });

  it("has a vertical icon", () => {
    cy.get("i.v-icon.material-icons.theme--light").should(
      "contain",
      "more_vert"
    );
  });
});
