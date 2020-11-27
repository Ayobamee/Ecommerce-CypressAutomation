class LandingPage
{
    

getAddSales()

{

    return  cy.get(':nth-child(2) > .sc-TXQaF > :nth-child(2)')
}


getPrompt()
{

    return cy.get('.sc-hmbsMR')
}

getSalesAmount() 

{
  return cy.get('.sc-jgPznn')

}

getNo() {

    return cy.get('.kvyVsR')
}


getPaymentAmount() {

    return cy.get('.ktBnET')
}


getEnableCustIfo() {

    return cy.get('.react-switch-handle')
}

getCustomerPhoneNo() {
    return cy.get('.sc-pYCbY > .sc-fznJRM')
}

getCustomerName() {
    return cy.get('.sc-fznxsB > :nth-child(2)')
}


getMakeSale()   
{
    return cy.get('form > .sc-bdnylx')
}


getAffirmSuccessfulSale()
{
    return cy.get('.Toastify__toast-body')
}


getMakeAdvancedSale() {

    return cy.get('.sc-jEWMFi')
    
}

getAddproducts() 
{
    return cy.get('.sc-jlZIZy > .sc-bdnylx')
}

getAddspecificproduct()

{
    return cy.get('.sc-mNjFF > .sc-kEqYlL')
}


getSecondSpecProd()
{
    return cy.contains('AutoTestProducts')
}


getAddSpecficItem()
{
    return cy.contains('Add 1 Product')
}

getSecondProdName()
{
    return cy.get('[name="productName"]')

}

getCostPrice()
{
    return cy.get('[name="productUnit"]')
}


getQty()
{

    return cy.get('[name="quantity"]')
}

getAddProd()
{
    return cy.get('.sc-mNjFF > .sc-kEqYlL')
}


getAddProdFinal()
{
    return cy.get(':nth-child(6) > .sc-eKaOPE > .sc-iuhWtz > .sc-hKckmk > .sc-bmjVWh')
}

getConfirmAdd()

{
    return cy.get('.sc-iTVIwl')
}


getPayAmt() 

{
    return cy.get('.sc-fznJRM')
}

getAddAdvancedSales()

{
    return cy.get('.fCcVuP')
}


getAddSpecificProd()
{

    return cy.get(':nth-child(6) > .sc-eKaOPE > .sc-iuhWtz > .sc-hKckmk > .sc-bmjVWh')
}


getReAddProd() 
{
    return cy.get('.sc-mNjFF > .sc-kEqYlL')
}


getPayAmt() 
{

   return cy.get('.sc-khIgXV > .sc-jgPznn') 
}


getAdvancedSaleConfirmation()
{
    return cy.get('.Toastify__toast')
}


}






export default LandingPage;