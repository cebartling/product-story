// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("vuexStore", () => {
  return cy.window().its("vueApp.$store");
});

Cypress.Commands.add("signIn", () => {
  return cy.vuexStore().invoke("dispatch", "common/signInWithGoogle");
});

Cypress.Commands.add("signOut", () => {
  return cy.vuexStore().invoke("dispatch", "common/signOff");
});

