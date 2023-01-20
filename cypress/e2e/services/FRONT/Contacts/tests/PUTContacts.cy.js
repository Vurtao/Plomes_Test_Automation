/// <reference types="cypress" />


describe("Change Contacts", () => {

    it("Edit Client Informations", () => {
        
        cy.visit("https://app.ploomes.com", {failOnStatusCode: false});

        cy.get('#Username').type('miguelteste@teste.com');
    
        cy.get('#Password').type('007vsNEO22');

        cy.get('#Bt_Login').click();

        cy.wait(5000);

        cy.get(':nth-child(2) > .w-100 > .sc-gKXOVf > #centerRender > #centerRenderMessage > span').click();

        cy.wait(6000);

        cy.contains('teste automacao').click();

        cy.contains('Opções').click();

        cy.contains('Editar cliente').click();

        cy.get('[name="contact_name"]').clear().type('teste automacao ALTERA'); 

        cy.get('[name="contact_legal_name"]').clear().type('teste automacao ALTERA');

        ///cy.xpath('//*[@id="select-fk-contactlineofbusiness-29"]').type('Agricultura / Pecuária').type('{downArrow}').type('{enter}');

        ///cy.xpath('//*[@id="select-fk-contactorigin-30"]').type('Facebook').type('{downArrow}').type('{enter}');

        cy.get('[name="contact_phones"]').clear().type('22222222222');

        ///cy.xpath('//*[@id="select-fk-contacttags-32"]').type('teste').type('{downArrow}').type('{enter}');
        
        cy.xpath('//*[@id="new_contact_modal"]/div/ng-transclude/div[1]/ng-transclude/div/section/div[3]/div/div[1]/div[1]/a').click();

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[1]/div/div/div/new-field/span/single-address-select-wrapper/single-address-select-react/div/div/input').clear().type('rua ALTERA');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[2]/div/div/div/new-field/span/input').clear().type('complemento ALTERA');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[3]/div/div/div/new-field/span/input').clear().type('bairro ALTERA');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[4]/div/div/div/new-field/span/input').clear().type('22222222');

        ///cy.xpath('//*[@id="select-fk-contactcity-39"]').clear().type('ABADIA DE GOIÁS - GO').type('{downArrow}').type('{enter}');

        cy.xpath('//*[@id="new_contact_modal"]/div/ng-transclude/div[1]/ng-transclude/div/section/div[4]/div/div[1]/div[1]/a').click();

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[1]/div/div/div/new-field/span/input').clear().type('testeautomacaoALTERA@teste.com');

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[2]/div/div/div/new-field/span/input').clear().type('site teste ALTERA');

        ///cy.xpath('//*[@id="select-fk-contactrelationship-41"]').clear().type('relacao teste ALTERA');

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[5]/div/div/div/new-field/span/div/textarea').clear().type('obs teste ALTERA');
        
        cy.xpath('//*[@id="new_contact_modal"]/div/ng-transclude/div[2]/div/div/ng-transclude/div/div/aside/button').click();

        cy.log('$contact-avatar-wrapper');

        cy.log('teste automacao ALTERA');

    })
})