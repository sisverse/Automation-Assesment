class Blog {
    BlogURL() {
      return cy.url().should("contain", "/practicetestautomation.com/blog");
    }
  }
  export default Blog;