
import { loginUser, mockData } from '../utils'
import { locators} from '../locators'

describe('Board', () => {
    beforeEach(() => {
        cy.visit('/login')
        loginUser('irina.karanovic@gmail.com', 'BakicaVukica');
        cy.wait(5000);
        cy.visit('/my-organizations')
    });

   it('Add Board', () => {
   
    cy.get('[title="Add new Board"]').click()
    cy.get('.vs-input-border > input').type(mockData.boardTitle)
    cy.get('[name="next_btn"]').click()
    cy.get(':nth-child(2) > .vs-c-radio > .vs-c-radio-check').click()
    cy.get('[name="next_btn"]').click()
    cy.get('[name="next_btn"]').click();
    cy.get('.el-button--success').first().click();
   })


   it('Archive Board', () => {
  
    cy.get('.vs-c-my-organization__content').first().click()

    if(cy.get('.vs-c-modal--features-button > .vs-c-btn')) {
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
    }

    cy.get('.vs-c-boards-item__header .el-tooltip').first().click({force:true})
    cy.get('[name="save-btn"]').click();

   })

   it('Remove Board', () => {
  
    cy.get('.vs-c-my-organization__content').first().click()
    cy.get('.vs-c-boards-item__header .el-tooltip').first().click({force:true})
    cy.get('[name="save-btn"]').click();
   })
})