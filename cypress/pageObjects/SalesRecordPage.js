class LandingPage
{
    

getAddSales()

{

    return  cy.get('[href="/actions/shop_sales_add"] > .sc-pQrUA')
}


getPrompt()
{

    return cy.get('.sc-fzomME > .sc-AxjAm')
}

getSalesAmount() 

{
  return cy.get('.sc-fzoiQi')

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
    return cy.get('form > .sc-AxjAm')
}


getAffirmSuccessfulSale()
{
    return cy.get('.Toastify__toast-body')
}


getMakeAdvancedSale() {

    return cy.get('.sc-ptEpz > .sc-fznxKY')
    
}

getAddproducts() 
{
    return cy.get('.sc-fzooss > .sc-AxjAm')
}

getAddspecificproduct()

{
    return cy.get('.sc-psdsT > .sc-fzoyTs')
}


getSecondSpecProd()
{
    return cy.get(':nth-child(1) > .sc-pQsrT')
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
    return cy.get('.sc-fzoJMP')
}


getAddProdFinal()
{
    return cy.get('.sc-fznNTe > .sc-AxjAm')
}

getConfirmAdd()

{
    return cy.get('.sc-fznNTe > .sc-AxjAm')
}


getPayAmt() 

{
    return cy.get('.sc-fznJRM')
}

getAddAdvancedSales()

{
    return cy.get('.ldJsig')
}


getAddSpecificProd()
{

    return cy.get('.sc-fznNTe > .sc-AxjAm')
}



getPayAmt() 
{

   return cy.get('.sc-fznJRM > .sc-fzoiQi') 
}


getAdvancedSaleConfirmation()
{
    return cy.get('body:nth-child(2) div:nth-child(2) div.Toastify:nth-child(5) div.Toastify__toast-container.Toastify__toast-container--bottom-center > div.Toastify__toast.Toastify__toast--success')
}


}






export default LandingPage;