import { locators } from './locators';

export const mockData = {
   boardTitle:'Markov BOrd',
   
}

export function loginUser(email, password) {
    cy.get(locators.login.email).type(email)
    cy.get(locators.login.password).type(password)
    cy.get(locators.login.submit).click();  
    
}

/* 
example of usage:

loginUser('irina.karanovic@gmail.com', 'BakicaVukica')

*/