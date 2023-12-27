class Courses {
    CoursesURL() {
      return cy.url().should("contain", "/practicetestautomation.com/courses");
    }
  }
  export default Courses;