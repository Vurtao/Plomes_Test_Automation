/// <reference types="cypress" />


describe("Change Deals", () => {

    it("Edit Deal Informations", () => {
        
        cy.visit("https://app.ploomes.com", {failOnStatusCode: false});

        cy.get('#Username').type('miguelteste@teste.com');
    
        cy.get('#Password').type('007vsNEO22');

        cy.get('#Bt_Login').click();

        cy.wait(5000);

        cy.get(':nth-child(3) > .w-100 > .sc-gKXOVf > #centerRender > #centerRenderMessage > span').click();

        cy.wait(5000);

        cy.contains('teste automacao').click();
        
        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/deal-page-wrapper/div/new-deal-page/div/div/section/new-deal-page-header/div/div/div/div/div/aside[3]/div/aside[3]/div/div/a').click();

        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/deal-page-wrapper/div/new-deal-page/div/div/section/new-deal-page-header/div/div/div/div/div/aside[3]/div/aside[3]/div/div/ul/li[1]/a/div/aside[2]').click();

        cy.get('[name="deal_title"]').clear().type('teste automacao ALTERA');

        cy.get('[name="deal_amount"]').clear().type('1111');

        ///cy.xpath('//*[@id="select-fk-dealcontact-30"]"]').type('Teste API Ploomes').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-dealperson-93"]').type('teste').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-dealorigin-36"]').type('Facebook').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-dealorigin-34"]').type('teste').type('{downArrow}').type('{enter}');
        
        cy.xpath('//*[@id="new_deal_modal"]/div/ng-transclude/div[1]/ng-transclude/div[1]/aside/div[3]/section/div[3]/div/div[1]/div[1]/a').click();

        ///cy.xpath('//*[@id="select-fk-dealcollaboratingusers-17"]').clear().type('Automação').type('{downArrow}').type('{enter}');
        
        ///cy.xpath('//*[@id="select-fk-dealproducts-18"]').clear().type('teste').type('{downArrow}').type('{enter}');
        
        cy.xpath('//*[@id="new_deal_modal"]/div/ng-transclude/div[2]/div/div/ng-transclude/div/div/aside/button').click();

        cy.log('.font-very-big');

        cy.log('teste automacao ALTERA');
        
    })
})