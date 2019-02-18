describe("About", () => {
  context("Visits the app root url and signs in", () => {
    beforeEach(() => {
      cy.visit("/");
      // cy.login();
    });

    it("has a main heading", () => {
      cy.contains("h1", "Welcome to ProductStory");
    });

    it("has a Sign In button", () => {
      cy.contains("button.sign-in-button", "Sign In");
    });

    it("has a headline in the toolbar", () => {
      cy.contains("div.v-toolbar__title.headline", "ProductStory");
    });
  });
});
