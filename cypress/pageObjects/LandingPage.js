class LandingPage
{
    

getSpacesLogo()

{

    return  cy.get('[src="/static/media/spaces_logo.508602f0.svg"]')
}

getImageForAgent()

{

    return  cy.get('body:nth-child(2) div:nth-child(2) header.sc-qXFOy.hZbUVv > a:nth-child(1)')
}



getImageProfile()

{

    return  cy.get('body:nth-child(2) div:nth-child(2) header.sc-qXFOy.hZbUVv > a:nth-child(1)')
}


getSaleIcon()

{

    return  cy.get('[href="/actions/shop_sales_add"] > .sc-pQrUA')
}


getShopIcon()

{

    return  cy.get('[href="/actions/shop"] > .sc-pQrUA')
}


getAgentIcon()

{

    return  cy.get('[href="/actions/agents"] > .sc-pQrUA')
}


getMerchantIcon()

{

    return  cy.get('[href="/actions/merchants"] > .sc-pQrUA')
}

getShop() 
{
    return cy.get('[href="/actions/shop"] > .sc-pQrUA')
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



}



export default LandingPage;