
/// <reference types= "Cypress" />
import HomePage from '../pageObjects/HomePage'
import LandingPage from '../pageObjects/LandingPage'

describe('Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate login as Merchant with correct Credentials', function() {

 const homePage = new HomePage()
 const landingPage = new LandingPage()

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
  pin2:this.data.merchantSecondPin,
  pin3 :this.data.merchantThirdPin,
  pin4: this.data.merchantFourthPin,
  pin5 : this.data.merchantFifthPin,
  pin6 : this.data.merchantSixthPin
     })
  
  //Wait for 10 secs
  cy.wait(10000)

  //Validate that Merchant user is successfully logged into the app.

  //Check that the spaces logo displays on landing page.
  landingPage.getSpacesLogo().should('be.visible')

  
  //Check that User image profile shows on landing page.
  landingPage.getImageProfile().should('be.visible')
  
  //Chek that the Add a sale icon is visible.
  landingPage.getSaleIcon().should('be.visible')
  

  //Check that My Shop is visible.
  landingPage.getShopIcon().should('be.visible')
  

  //Check that Agent Icon is invisible
  landingPage.getAgentIcon().should('not.be.visible')

  //Check that Merchant Icon is invisible
  landingPage.getMerchantIcon().should('not.be.visible')
  

})




})
