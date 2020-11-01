
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

  
  //Click notification
 landingPage.getNotification().click()


 //Validate that notification for user is displayed.

 landingPage.getViewNotification().should('be.visible')

 landingPage.getReferalNotification().should('be.visible')
  



})




})
