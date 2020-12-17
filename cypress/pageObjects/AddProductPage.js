class AddProductPage
{
    

   getAddProduct()

   {

    return cy.get(':nth-child(2) > .sc-jaBfpI > :nth-child(3)')
   }


    getProductCategory() 
    
    {
        return cy.get(':nth-child(2) > .css-c6oy9z-control > .css-1hwfws3')
    }


   getDrop() 
   {
       return cy.get('css-1hwfws3')
   }


   getProductName() 
   {

    return cy.get(':nth-child(1) > .sc-jgPznn')
   }


    getSpecificProduct()

    {

        return cy.get('#react-select-2-option-0')
    }
    
    getUnitCategory() 
    {
        return cy.get(':nth-child(3) > .css-c6oy9z-control')
    }

  getSpecificUnit()
  {
      return cy.get('#react-select-3-option-0')
  }

  getCostPrice()
  {

    return cy.get(':nth-child(4) > .sc-jgPznn')
  }

 getQuantityStock() 
 {

    return cy.get(':nth-child(5) > .sc-jgPznn')
 }


 getProductDescription()

 {
  return cy.get('.sc-hTRkEk')

 }


getRetailPrice()
{
    return cy.get('.dAwTcJ > .sc-jgPznn')
}

getSaveProduct() {
    return cy.get('.sc-bdnylx')
}

getSuccessMessage() {
    return cy.get('.Toastify__toast-body')
}


}



export default AddProductPage;