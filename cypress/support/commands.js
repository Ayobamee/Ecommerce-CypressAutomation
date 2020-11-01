// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('typeLogin', (user) => {
    cy.get('.sc-fzpjYC')
      .type(user.phoneNo)

    cy.get('.sc-AxjAm').click()

      cy.get('#1')
      .type(user.pin1)
  
      cy.get('#2')
      .type(user.pin2)
  
      cy.get('#3')
      .type(user.pin3)
  
      cy.get('#4')
      .type(user.pin4)
  
      cy.get('#5')
      .type(user.pin5)
  
      cy.get('#6')
      .type(user.pin6)
  
      cy.get('.sc-AxjAm').click()
      
  })
  
  Cypress.Commands.add('postgresql', (user) => {

  cy.postgresql(`Select data ->> 'pinCode' AS pinCode FROM public.users where data->>'msisdn'='+2348090909089`).should('eq', 'test');


  
  })

  Cypress.Commands.add('generateToken', (user) => {
  
    cy.request('POST' ,'https://api-dev.spaceso2o.com/api/token/generate-token', {

      "password": "112233",
      "username": "admin"
    
    }).then(function(response)
    
    {
    expect(response.status).to.eq(200)
    
    const authtoken = (response.body.token)
    
    cy.log(authtoken)
    
  

    }) 


    Cypress.Commands.add('searchUser', (user) => {
  
      cy.request('GET' ,'https://api-dev.spaceso2o.com/api/users/27201a5e-ee1b-41d3-afa0-8845e50026ad', {
  
        headers: {

          "fingerprint":  "e0224b3d-74f5-49c5-930f-61d7079c7b3b"
          
        }
      
      }).then(function(response)
      
      {
      expect(response.status).to.eq(200)
      
      
      
    }) 



  
      }) 





  })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... 
