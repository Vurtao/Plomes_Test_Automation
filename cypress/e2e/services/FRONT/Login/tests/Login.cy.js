/// <reference types="cypress" />


describe("Login", () => {

    it("Login in system", () => {
        
        cy.visit("https://app.ploomes.com", {failOnStatusCode: false});

        cy.get('#Username').type('miguelteste@teste.com');
    
        cy.get('#Password').type('007vsNEO22');

        cy.get('#Bt_Login').click();

        cy.wait(5000);

        cy.log('Conta teste Miguel Fuentes - Não contatar');
        
    })
})