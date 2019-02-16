// https://docs.cypress.io/api/introduction/api.html

describe("FrontDoor", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to ProductStory");
    cy.contains("button.sign-in-button", "Sign In");
    cy.contains("div.v-toolbar__title.headline", "ProductStory");
  });
});
