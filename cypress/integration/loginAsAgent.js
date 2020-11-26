
/// <reference types= "cypress" />
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


it('Validate login as Agent with correct Credentials', function() {

 const homePage = new HomePage()
 const landingPage = new LandingPage()

 //Open as an Iphone 6 view
 cy.viewport(320, 568)

  //Open Spaces
  cy.visit(this.data.baseURL)  
  //Wait for 2 secs
  cy.wait(2000)
  //Click Continue
  homePage.getOnboardButton().click({force :true})
  
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

  
  //Validate that Agent user is successfully logged into the app.

  //Check that the spaces logo displays on landing page.
  landingPage.getSpacesLogo().should('be.visible')

  
  //Check that User image profile shows on landing page.
  landingPage.getImageForAgent().should('be.visible')
  
  //Check that the Add a sale icon is visible.
  landingPage.getSaleIcon().should('be.visible')
  

  //Check that My Shop is visible.
  landingPage.getShopIcon().should('be.visible')
  
  //Check that Agent Icon is visible
  landingPage.getAgentIcon().should('be.visible')

  //Check that Merchant Icon is visible
  landingPage.getMerchantIcon().should('be.visible')

  //Check that Merch Buy Icon is visible
  landingPage.getMerchBuyIcon().should('be.visible')
  

})




})
