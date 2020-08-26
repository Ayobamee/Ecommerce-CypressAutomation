class AddProductPage
{
    

   getAddProduct()

   {

    return cy.get('[href="/actions/shop_products_add"] > .sc-pQrUA')
   }


    getProductCategory() 
    
    {
        return cy.get(':nth-child(2) > .css-drnb96-control > .css-1hwfws3')
    }


   getDrop() 
   {
       return cy.get('css-1hwfws3')
   }


   getProductName() 
   {

    return cy.get(':nth-child(1) > .sc-fzoiQi')
   }


    getSpecificProduct()

    {

        return cy.get('#react-select-2-option-0')
    }
    
    getUnitCategory() 
    {
        return cy.get(':nth-child(3) > .css-drnb96-control > .css-1hwfws3')
    }

  getSpecificUnit()
  {
      return cy.get('#react-select-3-option-0')
  }

  getCostPrice()
  {

    return cy.get(':nth-child(4) > .sc-fzoiQi')
  }

 getQuantityStock() 
 {

    return cy.get(':nth-child(5) > .sc-fzoiQi')
 }


 getProductDescription()

 {
  return cy.get('.eTSPPt')

 }


getRetailPrice()
{
    return cy.get('.hTuVXN > .sc-fzoiQi')
}

getSaveProduct() {
    return cy.get('.sc-AxjAm')
}

getSuccessMessage() {
    return cy.get('body:nth-child(2) div:nth-child(2) div.Toastify:nth-child(5) div.Toastify__toast-container.Toastify__toast-container--bottom-center > div.Toastify__toast.Toastify__toast--success')
}


}



export default AddProductPage;