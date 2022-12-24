import { faker } from '@faker-js/faker';

describe('login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    
   it('Login with valid credentials', () => {
    cy.get('[name="email"]').type('irina.karanovic@gmail.com')
    cy.get('[type="password"]').type('BakicaVukica')
    cy.get('.vs-u-text--left > .vs-c-btn').click();  
   })

   it('Login without enter email', () => {
    cy.get('[type="password"]').type('BakicaVukica')
    cy.get('.vs-u-text--left > .vs-c-btn').click();  
    cy.contains('The email field must be a valid email').should('be.visible')
   });

   it('With wrong credentials', () => {
    cy.get('[name="email"]').type(faker.internet.email())
    cy.get('[type="password"]').type(faker.internet.password())
    cy.get('.vs-u-text--left > .vs-c-btn').click()
    cy.contains('Oops! Your email/password combination is incorrec').should('be.visible')
   });
});