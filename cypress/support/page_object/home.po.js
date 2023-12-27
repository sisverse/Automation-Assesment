class Home {
  HomeURL() {
    return cy.url().should("contain", "/practicetestautomation.com");
  }
}
export default Home;
