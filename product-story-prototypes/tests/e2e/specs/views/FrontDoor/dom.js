// https://docs.cypress.io/api/introduction/api.html

describe("FrontDoor", () => {
  context("Visits the app root url", () => {
    beforeEach(() => {
      cy.visit("/");
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
