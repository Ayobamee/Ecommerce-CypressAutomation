
/// <reference types= "cypress" />
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


it('Validate login as Agent with incorrect Credentials', function() {

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
   cy.typeLogin({ phoneNo:this.data.agentPhoneNO, pin1:this.data.agentFirstPin,
    pin2:this.data.agentFirstPin,
    pin3 :this.data.agentThirdPin,
    pin4: this.data.agentFourthPin,
     pin5 : this.data.agentFifthPin,
     pin6 : this.data.agentSixthPin
   })

  //Wait for 5 secs
  cy.wait(5000)

  
 //Validate that Agent user is not successfully logged into the app.
  homePage.getFailedLogin().should('be.visible')

  
  
  

})




})
