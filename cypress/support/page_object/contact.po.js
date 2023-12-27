class Contact {
    ContactURL() {
      return cy.url().should("contain", "/practicetestautomation.com/contact");
    }
  }
  export default Contact;