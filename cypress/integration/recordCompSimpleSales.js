
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


it('Validate Agent can record complete Simple sale', function() {

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
  salesRecordPage.getPrompt().click()

  //Input sales Amount
  salesRecordPage.getSalesAmount().type(this.data.salesAmount)

  //Click Sales
  salesRecordPage.getMakeSale().click()

  //Validate that User can record complete sale successfully
  salesRecordPage.getAffirmSuccessfulSale().should('be.visible')


})



})
