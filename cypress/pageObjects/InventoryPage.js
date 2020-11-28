class InventoryPage
{
    

   getInventory()

   {

    return cy.get('[href="/actions/shop_inventory"] > .sc-bvRlZh > .sc-dcfGPC > .sc-kEqYlL')
   }

   getSelectProduct() 

   {
      return cy.contains('AutomatedProd3')
   }


  getRightab()
  {
     return cy.get('.sc-jQAyEw')
  }




   getDelete() 
   {

      return cy.get('.sc-gGLyOc > :nth-child(2)')
   }

   getConfirmDele()
   {
      return cy.contains('Yes')
   }

  
   getErrorMessage()
   {

      return cy.get('.Toastify__toast-body')
   }


}



export default InventoryPage;