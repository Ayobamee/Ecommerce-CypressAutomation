
/// <reference types= "cypress" />
import HomePage from '../pageObjects/HomePage'
//import LandingPage from '../pageObjects/LandingPage'
import SalesRecordPage from '../pageObjects/SalesRecordPage'

describe(' Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate Agent can record complete sale', function() {

 const homePage = new HomePage()
 //const landingPage = new LandingPage()
 const salesRecordPage = new SalesRecordPage()

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

  
  //Click Add Sales.
  salesRecordPage.getAddSales().click()

  //Accept prompt.
  salesRecordPage.getPrompt().click({force :true})

  salesRecordPage.getMakeAdvancedSale().click()

  //Accept prompt.
  salesRecordPage.getPrompt().click({force :true})

  //Add product
  salesRecordPage.getAddproducts().click()


  //Add specific product
  salesRecordPage.getAddspecificproduct().click({force :true})

  //Add Product name
  salesRecordPage.getSecondProdName().type(this.data.secondproductName)

  //Input cost price
  salesRecordPage.getCostPrice().type(this.data.costPrice)

  //Specify quantity
  salesRecordPage.getQty().type(this.data.quantityInstock)

  //Add product on fly
  salesRecordPage.getAddProd().click({force :true})

  //Add product finally
  salesRecordPage.getAddSpecificProd().click({force :true})

  salesRecordPage.getReAddProd().click({force: true})

  

  //Input Payment amount
  //salesRecordPage.getPayAmt().type(this.data.costPrice)

  //Add advanced sale
  salesRecordPage.getAddAdvancedSales().click()


 //Validate that User can record complete sale successfully
 salesRecordPage.getAffirmSuccessfulSale().should('be.visible')



})



})
