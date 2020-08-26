
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


it('Validate Users can Update their customer information', function() {

 const homePage = new HomePage()
 const landingPage = new LandingPage()

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

  //Click More
  landingPage.getMore().click()
  
  //Click Settings
  landingPage.getSettings().click()

  //Click Personal Details
  landingPage.getPersonalDetails().click()

  //Clear name
  landingPage.getName().clear()

  //Input Updated Name
  landingPage.getName().type(this.data.customerName)

  //Clear Last Name
  landingPage.getLastName().clear()

  //Input Updated Last Name
  landingPage.getLastName().type(this.data.createdCustName)

  //Clear Address
  landingPage.getAddress().clear()

  //Input Address
  landingPage.getAddress().type(this.data.Address)

  //Click Save
  landingPage.getSave().click()


  //Validate that User can update their customer info on the app.

  landingPage.getSuccessfulKYC().should('be.visible')

  


})




})
