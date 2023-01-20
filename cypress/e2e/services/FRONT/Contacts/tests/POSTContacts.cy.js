/// <reference types="cypress" />


describe("Create Contact", () => {

    it("New Client", () => {
        
        cy.visit("https://app.ploomes.com", {failOnStatusCode: false});

        cy.get('#Username').type('miguelteste@teste.com');
    
        cy.get('#Password').type('007vsNEO22');

        cy.get('#Bt_Login').click();

        cy.wait(5000);

        cy.get(':nth-child(2) > .w-100 > .sc-gKXOVf > #centerRender > #centerRenderMessage > span').click();

        cy.wait(5000);

        cy.get('span[uib-tooltip="Empresas"]').click();

        cy.get('#filter-list').click();

        cy.get('[ng-if="contactsCtrl.self.Profile.ContactsCompanyCreatePermission"] > .white-dropdown-link > .hbox > :nth-child(2)').click();

        cy.get('[name="contact_name"]').type('teste automacao'); 

        cy.get('[name="contact_legal_name"]').type('teste automacao');

        cy.xpath('//*[@id="select-fk-contactlineofbusiness-29"]').type('Agricultura / Pecuária').type('{downArrow}').type('{enter}');

        cy.xpath('//*[@id="select-fk-contactorigin-30"]').type('Facebook').type('{downArrow}').type('{enter}');

        cy.get('[name="contact_phones"]').type('11111111111');

        cy.xpath('//*[@id="select-fk-contacttags-32"]').type('ALTERA').type('{downArrow}').type('{enter}');
        
        cy.contains('Localização').click();

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[1]/div/div/div/new-field/span/single-address-select-wrapper/single-address-select-react/div/div/input').type('rua teste');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[2]/div/div/div/new-field/span/input').type('complemento teste');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[3]/div/div/div/new-field/span/input').type('bairro teste');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[4]/div/div/div/new-field/span/input').type('11111111');

        cy.xpath('//*[@id="select-fk-contactcity-33"]').type('ABADIA DE GOIÁS - GO').type('{downArrow}').type('{enter}');

        cy.contains('Outras informações').click();

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[1]/div/div/div/new-field/span/input').type('testeautomacao@teste.com');

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[2]/div/div/div/new-field/span/input').type('site teste');

        cy.xpath('//*[@id="select-fk-contactrelationship-35"]').type('relacao teste');

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[5]/div/div/div/new-field/span/div/textarea').type('obs teste');
        
        cy.contains('Salvar').click();

        cy.log('#contact-avatar-wrapper');

        cy.log('teste automacao');

    })
})