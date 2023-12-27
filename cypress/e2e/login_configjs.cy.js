/// <reference types="cypress"/>
import Blog from "../support/page_object/blog.po";
import Contact from "../support/page_object/contact.po";
import Courses from "../support/page_object/courses.po";
import Home from "../support/page_object/home.po";
import NavBar from "../support/page_object/navbar.po";
import Practice from "../support/page_object/practice.po";
describe("Automation Assesment", () => {
  const navbar = new NavBar();
  const home = new Home();
  const practice = new Practice();
  const courses = new Courses();
  const blog = new Blog();
  const contact = new Contact();
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  //xit and only are annotations
  it("Login call and Visit all Nav Bars", () => {
  //login and then visit all the nav bar items
    cy.login(username, password);
    navbar.NavToHome().click();
    home.HomeURL();
    navbar.NavToPractice().click();
    practice.PracticeURL();
    navbar.NavToCourses().click();
    courses.CoursesURL();
    navbar.NavToBlog().click();
    blog.BlogURL();
    navbar.NavToContact().click();
    contact.ContactURL();
  });
});
