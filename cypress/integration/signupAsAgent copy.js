
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



it('Sign up agent', function() {


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


cy.get('.sc-fzpjYC')
.type("09012345678")

cy.get('.sc-AxjAm').click()

//cy.wait(1000)

//GET OTP


/*
cy.request({

  method: 'GET' ,
  url:  'https://api-staging.spaceso2o.com/api/otp/send/mobile?msisdn=09012345678'



}).then(function(respons)

{
expect(respons.status).to.eq(200)

 //pin = null; 

 const pin = (respons.body.pinCode)

cy.log(pin)

const Array = pin.split('');


//cy.log(Array[0]);


cy.get('#1')
.type(Array[0])

cy.get('#2')
.type(Array[1])

cy.get('#3')
.type(Array[2])

cy.get('#4')
.type(Array[3])

cy.get('#5')
.type(Array[4])

cy.get('#6')
.type(Array[5])

cy.get('.sc-AxjAm').click()

*/



cy.request('POST' ,'https://api-staging.spaceso2o.com/api/token/generate-token', {

  "password": "112233",
  "username": "admin"

}).then(function(response)

{
expect(response.status).to.eq(200)


const authtoken = (response.body.token)

cy.log(authtoken)




cy.request({
    
  method: 'GET' ,
  url: 'https://api-staging.spaceso2o.com/api/users/d1461ea2-7143-492f-81e6-4762fc956876', 



headers: {

  fingerprint:  'e0224b3d-74f5-49c5-930f-61d7079c7b3b',

  Authorization:  'Bearer ' + authtoken
  
},


body:{}


}).then(function(response2)

{
expect(response2.status).to.eq(200)


const pin = (response2.body.data.pinCode)


const Array = pin.split('');


//cy.log(Array[0]);


cy.get('#1')
.type(Array[0])

cy.get('#2')
.type(Array[1])

cy.get('#3')
.type(Array[2])

cy.get('#4')
.type(Array[3])

cy.get('#5')
.type(Array[4])

cy.get('#6')
.type(Array[5])

cy.get('.sc-AxjAm').click()


  
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

})
