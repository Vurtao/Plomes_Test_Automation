/// <reference types="Cypress" />
const dataJson = require('../../payloads/change-contact.json')
let userId = ''

describe('DELETE contacts', () => {

    it.only('Create and Delete Contacts', () => {
            
            cy.request({
                method: 'POST',
                url: 'https://api2.ploomes.com/Contacts',
                headers: {
                    'Content-Type': 'application/json',  
                    'User-Key'    : 'BD022D3DE9A8BF8A932EFE9C297E16CBF80BEF8D590798AECC3A4DDE103F07CCA7DCDE57E87390A5746C1C53887D27A2ED8EB6C1177064A2425388692055CE66', 
                },
                body: {
                    "Name": "Teste POST",
                    "Neighborhood": "Pinheiros",
                    "ZipCode": 0,
                    "Register": "69.971.558/0001-10",
                    "OriginId": 0,
                    "CompanyId": null,
                    "StreetAddressNumber": "111",
                    "TypeId": 0,
                    "Phones": [
                        {
                            "PhoneNumber": "(XX) XXXX-XXXX",
                            "TypeId": 0,
                            "CountryId": 0
                        }
                    ],
                    "OtherProperties": [
                        {
                            "FieldKey": "{fieldKey}",
                            "StringValue": "texto exemplo"
                        },
                        {
                            "FieldKey": "{fieldKey}",
                            "IntegerValue": 2
                        }
                    ]
                }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res.body.value))
                cy.log(res.body.value) 
                expect(res.status).to.eq(200)
                expect({ Name: 'Teste POST' }).to.deep.equal({ Name: 'Teste POST' })
                expect({ Neighborhood: 'Pinheiros' }).to.deep.equal({ Neighborhood: 'Pinheiros' })
                expect({ Register: '69.971.558/0001-10' }).to.deep.equal({ Register: '69.971.558/0001-10' })
                expect({ StreetAddressNumber: '111' }).to.deep.equal({ StreetAddressNumber: '111' })
            }).then((res) =>{
                    cy.log("user id is: " + userId)
                    cy.request({
                        method: 'DELETE',
                        url: 'https://api2.ploomes.com/Contacts/'+userId,
                        headers: {
                            'Content-Type': 'application/json',
                            'User-Key'    : 'BD022D3DE9A8BF8A932EFE9C297E16CBF80BEF8D590798AECC3A4DDE103F07CCA7DCDE57E87390A5746C1C53887D27A2ED8EB6C1177064A2425388692055CE66',
                        },
                        body: {
                            "Name": "Teste PUT",
                            "Neighborhood": "Marginal Tiete",
                            "ZipCode": 0,
                            "Register": "69.971.558/0001-10",
                            "OriginId": 0,
                            "CompanyId": null,
                            "StreetAddressNumber": "222",
                            "TypeId": 0,
                            "Phones": [
                                {
                                    "PhoneNumber": "(XX) XXXX-XXXX",
                                    "TypeId": 0,
                                    "CountryId": 0
                                }
                            ],
                            "OtherProperties": [
                                {
                                    "FieldKey": "{fieldKey}",
                                    "StringValue": "texto exemplo"
                                },
                                {
                                    "FieldKey": "{fieldKey}",
                                    "IntegerValue": 2
                                }
                            ]
                          }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect({ Name: 'Teste PUT' }).to.deep.equal({ Name: 'Teste PUT' })
                        expect({ Neighborhood: 'Marginal Tiete' }).to.deep.equal({ Neighborhood: 'Marginal Tiete' })
                        expect({ Register: '69.971.558/0001-10' }).to.deep.equal({ Register: '69.971.558/0001-10' })
                        expect({ StreetAddressNumber: '222' }).to.deep.equal({ StreetAddressNumber: '222' })
                    })
            })
            
        
        
    })
})