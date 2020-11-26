
/// <reference types= "cypress" />
import HomePage from '../pageObjects/HomePage'
import CustomerPage from '../pageObjects/CreateCustomerPage'

describe('Regression TestSuite', function()
{

  //Import test data
  before(function() {
  
    cy.fixture('testData').then(function(data)
    {
  this.data=data
  
    })
  
  })


it('Validate that user can create a customer', function() {

 const homePage = new HomePage()
 const createCustomerPage = new CustomerPage()

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

  //Select Customer Page
  createCustomerPage.getCustomers().click()

  //Add customer
  createCustomerPage.getaddCustomer().click()

  //Input Customer Name
  createCustomerPage.getCustomerName().type(this.data.createdCustName)
  
  //Input Customer Phone Number
  createCustomerPage.getCustomerPhoneNo().type(this.data.createdCustPhoneNo)
  
  //Click Create Customer
  createCustomerPage.getAddCustomerButton().click()


  //Select Customer
  createCustomerPage.getSelectAddedCustomer().click()
  

})


})
