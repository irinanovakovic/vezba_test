import { locators } from '../locators'
import { faker } from '@faker-js/faker';

describe('Register Page', () => {
 
    it.skip('Register - Positiv case', () => {
        cy.register(faker.internet.email(),faker.random.alpha(10),2)
        
    })
    it('Submit without enter email', () => {
        cy.register(null,faker.random.alpha(10),2)
        cy.contains('The email field must be a valid emai').should('be.visible')
    })
    it('Invalid email message', () => {

    })

    it('Password is too short', () => {

    });
    it('Number of user is great then 10 people', () => {

    })
})