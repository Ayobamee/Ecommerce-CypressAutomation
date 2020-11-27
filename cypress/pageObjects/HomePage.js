class HomePage
{
    
    getOnboardButton() 
    
    {
        return cy.get('.sc-bdnylx')
    }

    getPhoneNoField() 
    
    {
        return cy.get('.sc-fzpjYC')
    }

    getContinue() 
    
    {
        return cy.get('.sc-AxjAm')
    }

    getFirstPin() 
    
    {
        return cy.get('#1')
    }


    getSecondPin() 
    
    {
        return cy.get('#2')
    }

    getThirdPin() 
    
    {
        return cy.get('#3')
    }

    getFourthPin() 
    
    {
        return cy.get('#4')
    }


    getFifthPin() 
    
    {
        return cy.get('#5')
    }


    getSixthPin() 
    
    {
        return cy.get('#6')
    }

    getLogin() 
    
    {
        return cy.get('.sc-AxjAm')
    }

    getFailedLogin() 
    
    {
        return cy.get('.Toastify__toast-body').should('be.visible')
    }



}



export default HomePage;