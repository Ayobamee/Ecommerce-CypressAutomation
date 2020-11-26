class AddProductPage
{
    

   getAddProduct()

   {

    return cy.get('.sc-qPzgd > :nth-child(4)')
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

    return cy.get(':nth-child(1) > .sc-fzpjYC')
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

    return cy.get(':nth-child(4) > .sc-fzpjYC')
  }

 getQuantityStock() 
 {

    return cy.get(':nth-child(5) > .sc-fzpjYC')
 }


 getProductDescription()

 {
  return cy.get('.lbHjaz')

 }


getRetailPrice()
{
    return cy.get('.dulHoT')
}

getSaveProduct() {
    return cy.get('.sc-AxjAm')
}

getSuccessMessage() {
    return cy.get('.Toastify__toast-body')
}


}



export default AddProductPage;