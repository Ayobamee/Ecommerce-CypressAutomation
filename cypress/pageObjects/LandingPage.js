class LandingPage
{
    

getSpacesLogo()

{

    return  cy.get('[src="/static/media/spaces_logo.508602f0.svg"]')
}

getImageForAgent()

{

    return  cy.get('.sc-pbYdQ')
}



getImageProfile()

{

    return  cy.get('.sc-pbYdQ')
}


getSaleIcon()

{

    return  cy.get(':nth-child(2) > .sc-qPzgd > :nth-child(2)')
}


getShopIcon()

{

    return  cy.get(':nth-child(2) > .sc-qPzgd > :nth-child(1)')
}


getAgentIcon()

{

    return  cy.get(':nth-child(1) > .sc-qPzgd > :nth-child(3)')
}


getMerchantIcon()

{

    return  cy.get(':nth-child(1) > .sc-qPzgd > :nth-child(2)')
}

getShop() 
{
    return cy.get(':nth-child(2) > .sc-qPzgd > :nth-child(1)')
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
    return cy.get('.sc-pRhbc')
}


getViewNotification() {
    return cy.get(':nth-child(1) > .sc-prQdK')
}

getReferalNotification() {
    return cy.get(':nth-child(2) > .sc-prQdK')
}

}



export default LandingPage;