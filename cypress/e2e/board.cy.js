
import { loginUser, mockData } from '../utils'
import { locators} from '../locators'

describe('Board', () => {
    beforeEach(() => {
        cy.visit('/login')
        loginUser('irina.karanovic@gmail.com', 'BakicaVukica');
        cy.wait(5000);
        cy.visit('/my-organizations')
    });

   it.only('Add Board', () => {
   
    cy.get(locators.board.addNewBoard).click()
    cy.get(locators.board.inputTitle).type(mockData.boardTitle)
    cy.get(locators.board.nextBtn).click()
    cy.get(locators.board.kanabOption).click()
    cy.get(locators.board.nextBtn).click()
    cy.get(locators.board.nextBtn).click();
    cy.get(locators.board.nextBtn).click();
    cy.get(locators.board.nextBtn).click();
    cy.get(locators.board.succesBtn).first().click();
   })


   it('Archive Board', () => {
  
    cy.get(locators.board.myOrgFirstClick).first().click()

    if(cy.get(locators.board.modFeaturesBtn)) {

       cy.get(locators.board.modFeaturesBtn).click()
    }

    cy.get(locators.board.boardsTooltip).first().click({force:true})
    cy.get(locators.board.saveBtn).click();

   })

   it('Remove Board', () => {
  
    cy.get(locators.board.myOrgFirstClick).first().click()
    cy.get(locators.board.boardsTooltip).first().click({force:true})
    cy.get(locators.board.saveBtn).click();
   })

   it.skip('Test program', () => {
    cy.visit('/my-organizations')
   })
})