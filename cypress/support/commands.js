import { locators } from '../locators';


// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {

    cy.get(locators.login.email).type(email)
    cy.get(locators.login.password).type(password)
    cy.get(locators.login.submit).click();  
 })

 Cypress.Commands.add('register', (email, password, numberOfUser = 1) => {
    cy.visit('/')
    cy.get(locators.register.signUpLink).click();
    cy.get(locators.register.plan).click({ force: true })
    if(email) {
        cy.get(locators.register.email).type(email);
    }
    if(password) {
        cy.get(locators.register.password).type(password)
    }
   
    cy.get(locators.register.numberOfuser).type(numberOfUser)
    cy.get(locators.register.startFreeTrial).click()

  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })