class LandingPage
{
    

getSpacesLogo()

{

    return  cy.get('.sc-fBFNZt')
}

getImageForAgent()

{

    return  cy.get('.sc-leegwF')
}



getMerchBuyIcon()

{

    return  cy.get(':nth-child(1) > .sc-jaBfpI > .sc-eDdLqb')
}



getImageProfile()

{

    return  cy.get('.sc-leegwF')
}


getSaleIcon()

{

    return  cy.get(':nth-child(2) > .sc-jaBfpI > :nth-child(2)')
}


getShopIcon()

{

    return  cy.get(':nth-child(2) > .sc-jaBfpI > :nth-child(1)')
}


getAgentIcon()

{

    return  cy.get(':nth-child(3) > .sc-jaBfpI > :nth-child(3)')
}


getMerchantIcon()

{

    return  cy.get(':nth-child(3) > .sc-jaBfpI > :nth-child(2)')
}

getShop() 
{
    return cy.get(':nth-child(2) > .sc-jaBfpI > :nth-child(1)')
}

getMore() 
{
    return cy.get(':nth-child(4) > .sc-qZtVr')
}

 getSettings()
 {
     return cy.get('.sc-fznAgC > .sc-AxheI')
 }

getPersonalDetails() 
{
    return cy.get('[href="/user/update_data"] > .sc-pQEbo > .sc-pHIBf')
}
 

getName() 
{
    return cy.get(':nth-child(1) > .sc-fzoiQi')
}

getLastName()
{
    return cy.get(':nth-child(2) > .sc-fzoiQi')
}

getAddress() 
{
    return cy.get(':nth-child(5) > .sc-fzoiQi')
}

getSave() {
    return cy.get('.sc-AxjAm')
}

getSuccessfulKYC()
{
    return cy.get('.Toastify__toast-body')
}


getNotification()
{
    return cy.get('.sc-iOuBNv')
}


getViewNotification() {
    return cy.get('.sc-jfkKcj > :nth-child(1)')
}

getReferalNotification() {
    return cy.get(':nth-child(2) > .sc-iuhWtz')
}

}



export default LandingPage;