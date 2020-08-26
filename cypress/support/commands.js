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
    cy.get('.sc-fzoiQi')
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
