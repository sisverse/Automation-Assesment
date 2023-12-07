/// <reference types="cypress"/>
import Login from "../support/page_object/login.po";
describe("Automation Assesment", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  const login = new Login();
  it("Login", () => {
    cy.visit("/practice-test-login");
    login.Username().type(username);
    login.Password().type(password);
    login.SubmitBtn().click();
    cy.url().should(
      "contain",
      "practicetestautomation.com/logged-in-successfully/"
    );
    login.LoginText().should("contain", "Congratulations");
    login.LoginText().should("contain", "successfully logged in");
    login.LogoutBtn();
  });
});
