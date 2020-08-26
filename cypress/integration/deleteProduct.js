
/// <reference types= "cypress" />
import HomePage from '../pageObjects/HomePage'
import LandingPage from '../pageObjects/LandingPage'
import InventoryPage from '../pageObjects/InventoryPage'

describe('Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate that user can delete a product', function() {

 const homePage = new HomePage()
 const landingPage = new LandingPage()
 const inventoryPage = new InventoryPage()

 //Open as an Iphone 6 view
 cy.viewport(320, 568)

  //Open Spaces
  cy.visit(this.data.baseURL)  
  //Wait for 2 secs
  cy.wait(2000)
  //Click Continue
  homePage.getOnboardButton().click()
  
   //Login to the application
   cy.typeLogin({ phoneNo:this.data.agentPhoneNO, pin1:this.data.agentFirstPin,
    pin2:this.data.agentSecondPin,
    pin3 :this.data.agentThirdPin,
    pin4: this.data.agentFourthPin,
     pin5 : this.data.agentFifthPin,
     pin6 : this.data.agentSixthPin
   })

  //Wait for 10 secs
  cy.wait(10000)

  
  //Validate that user can delete product from app.

  //Navigate to Shop page.
  landingPage.getShop().click()

  //Click Inventory
  inventoryPage.getInventory().click()

  //Select Product
  inventoryPage.getSelectProduct().click()

  inventoryPage.getCloseTab().click()

  //Hit the right tab
  inventoryPage.getLeftTab().click()
  
  //Hit the delete button
  inventoryPage.getDelete().click()

  //Confirm delete
  inventoryPage.getConfirmDele().click()
  
  

})




})
