class InventoryPage
{
    

   getInventory()

   {

    return cy.get('[href="/actions/shop_inventory"] > .sc-pRDlx > .sc-pZzYQ')
   }

   getSelectProduct() 

   {
      return cy.get(':nth-child(9) > .sc-pczax')
   }


  getCloseTab()
  {
     return cy.get('.sc-fzoVTD')
  }


   getLeftTab () 
   {
    return cy.get('.sc-fzpisO')

   }

   getDelete() 
   {

      return cy.get('.sc-fzpkqZ > :nth-child(2) > .sc-AxjAm')
   }

   getConfirmDele()
   {
      return cy.get('.sc-fznOgF > :nth-child(2)')
   }


}



export default InventoryPage;