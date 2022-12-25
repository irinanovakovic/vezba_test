import { faker } from '@faker-js/faker';
import { locators } from '../locators';
import { loginUser } from '../utils'


describe('login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    
   it('Login with valid credentials', () => {
     loginUser('irina.karanovic@gmail.com', 'BakicaVukica')
   })

   it('Login without enter email', () => {
    cy.get(locators.login.password).type(faker.internet.password())
    cy.get(locators.login.submit).click();  
    cy.contains('The email field must be a valid email').should('be.visible')
   });

   it('With wrong credentials', () => {
    cy.get(locators.login.email).type(faker.internet.email())
    cy.get(locators.login.password).type(faker.internet.password())
    cy.get(locators.login.submit).click()
    cy.contains('Oops! Your email/password combination is incorrec').should('be.visible')
   });
});