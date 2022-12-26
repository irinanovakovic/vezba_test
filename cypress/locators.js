export const locators = {
    login: {
        email: '[name="email"]',
        password: '[type="password"]',
        submit: '.vs-u-text--left > .vs-c-btn'
    },
    register: {
       signUpLink:'[data-cy="login-sign-up-link"]',
       plan:'.vsp-c-pricing-plan-list--monthly > :nth-child(1) > .vsp-c-btn',
       email:'[data-cy="sign-up-email-input"]',
       password:'[type="password"]',
       numberOfuser:'.el-input > [data-cy="sign-up-number-of-users-input"]',
       startFreeTrial:'[data-cy="sign-up-submit-button"]'
    },
    board: {
        addNewBoard:'[title="Add new Board"]',
        inputTitle:'.vs-input-border > input',
        kanabOption:':nth-child(2) > .vs-c-radio > .vs-c-radio-check',
        nextBtn:'[name="next_btn"]',
        succesBtn:'.el-button--success',
        myOrgFirstClick:'.vs-c-my-organization__content',
        modFeaturesBtn:'.vs-c-modal--features-button > .vs-c-btn',
        boardsTooltip:'.vs-c-boards-item__header .el-tooltip',
        saveBtn:'[name="save-btn"]',
        contentClick:'.vs-c-my-organization__content',
    

    },
    tasks: {

    }
        
    
};