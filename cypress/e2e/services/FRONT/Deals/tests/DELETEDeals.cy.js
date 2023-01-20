/// <reference types="cypress" />


describe("Delete Deals", () => {

    it("Create and Delete a Deal", () => {
        
        cy.visit("https://app.ploomes.com", {failOnStatusCode: false});

        cy.get('#Username').type('miguelteste@teste.com');
    
        cy.get('#Password').type('007vsNEO22');

        cy.get('#Bt_Login').click();

        cy.wait(5000);

        cy.get(':nth-child(3) > .w-100 > .sc-gKXOVf > #centerRender > #centerRenderMessage > span').click();

        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/div/aside/div/header/div/aside[3]/a').click();
        
        cy.get('[name="deal_title"]').type('teste automacao DELETE');

        cy.get('[name="deal_amount"]').type('3333');

        ///cy.xpath('//*[@id="select-fk-dealcontact-30"]"]').type('Teste API Ploomes').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-dealperson-93"]').type('teste').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-dealorigin-36"]').type('Facebook').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-dealorigin-34"]').type('teste').type('{downArrow}').type('{enter}');
        
        cy.contains('Outras informações').click();

        cy.xpath('//*[@id="select-fk-dealcollaboratingusers-17"]').type('Automação').type('{downArrow}').type('{enter}');
        
        cy.xpath('//*[@id="select-fk-dealproducts-18"]').type('teste').type('{downArrow}').type('{enter}');
        
        cy.contains('Salvar').click();

        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/deal-page-wrapper/div/new-deal-page/div/div/section/new-deal-page-header/div/div/div/div/div/aside[3]/div/aside[3]/div/div/a').click();

        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/deal-page-wrapper/div/new-deal-page/div/div/section/new-deal-page-header/div/div/div/div/div/aside[3]/div/aside[3]/div/div/ul/li[3]/a/div/aside[2]').click();

        cy.xpath('//*[@id="clickConfirm"]/div/div/div[2]/div/a[1]').click();

        cy.log('Negócio');

    })
})