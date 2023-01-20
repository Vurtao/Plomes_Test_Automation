/// <reference types="cypress" />


describe("List Contacts", () => {

    it("List all Clients", () => {
        
        cy.visit("https://app.ploomes.com", {failOnStatusCode: false});

        cy.get('#Username').type('miguelteste@teste.com');
    
        cy.get('#Password').type('007vsNEO22');

        cy.get('#Bt_Login').click();

        cy.wait(5000);

        cy.get(':nth-child(2) > .w-100 > .sc-gKXOVf > #centerRender > #centerRenderMessage > span').click();

        cy.wait(5000);

        cy.log('Novo cliente');

    })
})