class InventoryPage
{
    

   getInventory()

   {

    return cy.get('[href="/actions/shop_inventory"] > .sc-pAArZ > .sc-pIVsU > .sc-fzoiQi')
   }

   getSelectProduct() 

   {
      return cy.get(':nth-child(2) > .sc-qYsuA > .sc-fznKkj > .sc-fznZeY > .sc-fzokOt')
   }


  getRightab()
  {
     return cy.get('.sc-fzokvW')
  }




   getDelete() 
   {

      return cy.get('.sc-fzoYHE > :nth-child(2) > .sc-AxjAm')
   }

   getConfirmDele()
   {
      return cy.get('.sc-fzobTh > :nth-child(2)')
   }

  
   getErrorMessage()
   {

      return cy.get('.Toastify__toast-body')
   }


}



export default InventoryPage;