
/// <reference types= "cypress" />


describe('Regression TestSuite', function()
{


it('Extract pincode for user', function() {

 

 //Open as an Iphone 6 view

//cy.generateToken();

cy.request('POST' ,'https://api-dev.spaceso2o.com/api/token/generate-token', {

  "password": "112233",
  "username": "admin"

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.token)

cy.log(authtoken)



cy.request({
    
  method: 'GET' ,
  url: 'https://api-dev.spaceso2o.com/api/users/27201a5e-ee1b-41d3-afa0-8845e50026ad', 



headers: {

  fingerprint:  'e0224b3d-74f5-49c5-930f-61d7079c7b3b',

  Authorization:  'Bearer ' + authtoken
  
},


body:{}


}).then(function(response2)

{
expect(response2.status).to.eq(200)


const pin = (response2.body.data.pinCode)

cy.log(pin)


})




  //cy.get('#1')
  //.type("1")

  //cy.get('#2')
      //.type("2")
  
      //cy.get('#3')
      //.type("3")
  
      //cy.get('#4')
      //.type("4")
  
      //cy.get('#5')
      //.type("5")
  
      //cy.get('#6')
      //.type("6")


  
  
   //Login to the application
   //cy.typeLogin({ phoneNo:this.data.agentPhoneNO, pin1:this.data.agentFirstPin,
    //pin2:this.data.agentSecondPin,
    //pin3 :this.data.agentThirdPin,
    //pin4: this.data.agentFourthPin,
     //pin5 : this.data.agentFifthPin,
     //pin6 : this.data.agentSixthPin
   //})

  //Wait for 10 secs
  //cy.wait(10000)

  
  //Validate that Agent user is successfully logged into the app.

  //Check that the spaces logo displays on landing page.
  //landingPage.getSpacesLogo().should('be.visible')

  
  //Check that User image profile shows on landing page.
  //landingPage.getImageForAgent().should('be.visible')
  
  //Check that the Add a sale icon is visible.
  //landingPage.getSaleIcon().should('be.visible')
  

  //Check that My Shop is visible.
  //landingPage.getShopIcon().should('be.visible')
  

  //Check that Agent Icon is invisible
  //landingPage.getAgentIcon().should('be.visible')

  //Check that Merchant Icon is invisible
  //landingPage.getMerchantIcon().should('be.visible')
  

})

})


})
