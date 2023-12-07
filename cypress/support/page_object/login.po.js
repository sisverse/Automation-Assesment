class Login {
  Username() {
    return cy.get("#username").should("exist").should("be.visible");
  }
  Password() {
    return cy.get("#password").should("exist").should("be.visible");
  }
  SubmitBtn() {
    return cy.get("#submit").should("exist").should("be.visible");
  }
  LoginText(){
    return cy.xpath("//strong[contains(text(),'Congratulations student. You successfully logged i')]").should("exist").should("be.visible");
  }
  LogoutBtn(){
    return cy.xpath("//a[.='Log out']").should("exist").should('be.visible');
  }
}
export default Login;