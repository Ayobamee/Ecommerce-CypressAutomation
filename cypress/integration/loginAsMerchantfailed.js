
/// <reference types= "Cypress" />
import HomePage from '../pageObjects/HomePage'


describe('Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate login as Merchant with incorrect Credentials', function() {

 const homePage = new HomePage()
 
 //Open as an Iphone 5 view
 cy.viewport(320, 568)


  //Open Spaces
  cy.visit(this.data.baseURL)  
  //Wait for 2 secs
  cy.wait(2000)
  //Click Continue
  homePage.getOnboardButton().click()
  
  //Login to the application
  cy.typeLogin({ phoneNo:this.data.merchantPhoneNO, pin1:this.data.merchantFirstPin,
  pin2:this.data.merchantFirstPin,
  pin3 :this.data.merchantThirdPin,
  pin4: this.data.merchantFourthPin,
  pin5 : this.data.merchantFifthPin,
  pin6 : this.data.merchantSixthPin
       })

  //Wait for 5 secs
  cy.wait(5000)

  
 //Validate that Merchant user is not successfully logged into the app.
  homePage.getFailedLogin().should('be.visible')

  
  
  

})




})
