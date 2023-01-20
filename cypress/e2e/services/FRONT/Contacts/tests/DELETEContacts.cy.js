/// <reference types="cypress" />


describe("Delete Contacts", () => {

    it("Create and Delete a Client", () => {
        
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

        cy.get('[name="contact_name"]').type('teste DELETE'); 

        cy.get('[name="contact_legal_name"]').type('teste DELETE');

        cy.xpath('//*[@id="select-fk-contactlineofbusiness-29"]').type('Agricultura / Pecuária').type('{downArrow}').type('{enter}');

        cy.xpath('//*[@id="select-fk-contactorigin-30"]').type('Facebook').type('{downArrow}').type('{enter}');

        cy.get('[name="contact_phones"]').type('11111111111');

        cy.xpath('//*[@id="select-fk-contacttags-32"]').type('ALTERA').type('{downArrow}').type('{enter}');
        
        cy.contains('Localização').click();

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[1]/div/div/div/new-field/span/single-address-select-wrapper/single-address-select-react/div/div/input').type('rua DELETE');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[2]/div/div/div/new-field/span/input').type('complemento DELETE');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[3]/div/div/div/new-field/span/input').type('bairro DELETE');

        cy.xpath('//*[@id="toggle-section-40009027"]/div/div/ng-transclude/forms/form/span[4]/div/div/div/new-field/span/input').type('11111111');

        cy.xpath('//*[@id="select-fk-contactcity-33"]').type('ABADIA DE GOIÁS - GO').type('{downArrow}').wait(500).type('{enter}');

        cy.contains('Outras informações').click();

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[1]/div/div/div/new-field/span/input').type('testeautomacaoDELETE@teste.com');

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[2]/div/div/div/new-field/span/input').type('site DELETE');

        cy.xpath('//*[@id="select-fk-contactrelationship-35"]').type('relacao DELETE');

        cy.xpath('//*[@id="toggle-section-40009028"]/div/div/ng-transclude/forms/form/span[5]/div/div/div/new-field/span/div/textarea').type('obs DELETE');
        
        cy.xpath('//*[@id="new_contact_modal"]/div/ng-transclude/div[2]/div/div/ng-transclude/div/div/aside/button').click();

        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/contact-page-wrapper/div/new-contact-page/div/div/section/div/aside[1]/new-contact-page-side-menu/div/div/div/div/div[1]/div/a').click();

        cy.xpath('//*[@id="react-root"]/div/div[2]/main-wrapper/app-wrapper/div/section/div/aside[2]/div/contact-page-wrapper/div/new-contact-page/div/div/section/div/aside[1]/new-contact-page-side-menu/div/div/div/div/div[1]/div/ul/li[2]/a/div/aside[2]').click();

        cy.xpath('//*[@id="clickConfirm"]/div/div/div[2]/div/a[1]').click();

        cy.log('Cliente ecluído');

    })
})