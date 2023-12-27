class Practice {
    PracticeURL() {
      return cy.url().should("contain", "/practicetestautomation.com/practice");
    }
  }
  export default Practice;