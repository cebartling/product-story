const _ = Cypress._;

// require node's url module
// const url = require("url");

describe("About", () => {
  Cypress.Commands.add("helloWorld", (overrides = {}) => {
    Cypress.log({
      name: "helloWorld"
    });

    const options = {
      method: "GET",
      url: "http://localhost:7075/helloWorld"
      // qs: {
      //   // use qs to set query string to the url that creates
      //   // http://auth.corp.com:8080?redirectTo=http://localhost:7074/set_token
      //   redirectTo: "http://localhost:7074/set_token"
      // },
      // form: true, // we are submitting a regular form body
      // body: {
      //   username: "jane.lane",
      //   password: "password123"
      // }
    };

    // allow us to override defaults with passed in overrides
    _.extend(options, overrides);

    cy.request(options);
  });

  context("Visits the app root url and signs in", () => {
    beforeEach(() => {
      cy.helloWorld().then(resp => {
        cy.log("Hello world response", resp.body);
        expect(resp.status).to.eq(200);
        // expect(resp.json).to.include("<h1>Welcome to the Dashboard!</h1>");
      });
      cy.visit("/");
      // cy.login();
    });

    it("has a main heading", () => {
      cy.contains("h1", "Welcome to ProductStory");
    });

    // it("has a Sign In button", () => {
    //   cy.contains("button.sign-in-button", "Sign In");
    // });
    //
    // it("has a headline in the toolbar", () => {
    //   cy.contains("div.v-toolbar__title.headline", "ProductStory");
    // });
  });
});
