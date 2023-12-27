class NavBar {
  NavToHome() {
    return cy
      .xpath('//li[@id="menu-item-43"]')
      .should("exist")
      .should("be.visible");
  }
  NavToPractice() {
    return cy
      .xpath('//li[@id="menu-item-20"]')
      .should("exist")
      .should("be.visible");
  }
  NavToCourses() {
    return cy
      .xpath('//li[@id="menu-item-21"]')
      .should("exist")
      .should("be.visible");
  }
  NavToBlog() {
    return cy
      .xpath('//li[@id="menu-item-19"]')
      .should("exist")
      .should("be.visible");
  }
  NavToContact() {
    return cy
      .xpath('//li[@id="menu-item-18"]')
      .should("exist")
      .should("be.visible");
  }
}
export default NavBar;
