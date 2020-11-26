
/// <reference types= "cypress" />
import HomePage from '../pageObjects/HomePage'
import AddProductPage from '../pageObjects/AddProductPage'
import LandingPage from '../pageObjects/LandingPage'
import InventoryPage from '../pageObjects/InventoryPage'

describe(' Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate that user can add products', function() {

 const homePage = new HomePage()
 const addProductPage = new AddProductPage()
 const landingPage = new LandingPage()
 const inventoryPage = new InventoryPage()

 //Open as an Iphone 5 view
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

  
  //Click Add product
  addProductPage.getAddProduct().click()

  //Select Product Category
  addProductPage.getProductCategory().click()

  //Select product
addProductPage.getSpecificProduct().click()

//Input Product Name
addProductPage.getProductName().type(this.data.productName)

//Select unit category
addProductPage.getUnitCategory().click()

//Select specific unit
addProductPage.getSpecificUnit().click()

//Input Product cost price
addProductPage.getCostPrice().type(this.data.costPrice)

//Input quantity in stock
addProductPage.getQuantityStock().type(this.data.quantityInstock)

//Input product description
addProductPage.getProductDescription().type(this.data.productDescription)

//Input Retail price
addProductPage.getRetailPrice().type(this.data.retailPrice)

//Save Product
addProductPage.getSaveProduct().click()

//Check that product was successfully added  
addProductPage.getSuccessMessage().should('be.visible')

//Navigate to Shop page.
landingPage.getShop().click()

//Click Inventory
inventoryPage.getInventory().click()

//Select Product
inventoryPage.getSelectProduct().click()

//inventoryPage.getCloseTab().click()

//Hit the right tab
inventoryPage.getRightab().click()

//Hit the delete button
inventoryPage.getDelete().click()

//Confirm delete
inventoryPage.getConfirmDele().click()

//Confirm error message
inventoryPage.getErrorMessage().should('be.visible')



})




})
