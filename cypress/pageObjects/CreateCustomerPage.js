class CustomerPage
{
    

getCustomers()

{

    return  cy.get(':nth-child(1) > .sc-qPzgd > :nth-child(1)')
}

getaddCustomer() 
{
    return cy.get('.sc-fzqzlV')

}

getCustomerName()
{
    return cy.get(':nth-child(1) > .sc-fzpjYC')
}

getCustomerPhoneNo()

{
    return cy.get(':nth-child(2) > .sc-fzpjYC')

}


getSelectAddedCustomer()

{

    return cy.get(':nth-child(1) > .sc-pKMan > .sc-fzoiQi')
}



getAddCustomerButton() 
{
    return cy.get('.dSeJSB')
}

}



export default CustomerPage;