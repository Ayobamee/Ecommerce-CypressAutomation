class CustomerPage
{
    

getCustomers()

{

    return  cy.get('[href="/actions/shop_customers"] > .sc-pQrUA')
}

getaddCustomer() 
{
    return cy.get('.sc-fznyYp')

}

getCustomerName()
{
    return cy.get('.sc-fznxsB > :nth-child(1)')
}

getCustomerPhoneNo()

{
    return cy.get(':nth-child(2) > .sc-fzoiQi')
}

getAddCustomerButton() 
{
    return cy.get('.dSeJSB')
}

}



export default CustomerPage;