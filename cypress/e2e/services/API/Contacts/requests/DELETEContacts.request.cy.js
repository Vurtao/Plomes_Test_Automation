/// <reference types="cypress" />

function deleteContacts(idContacts) {
  return cy.api({
    method: 'DELETE',
    url: `Contacts/${idContacts}`,
    headers: {
      'Content-Type': 'application/json',  
      'User-Key'    : 'BD022D3DE9A8BF8A932EFE9C297E16CBF80BEF8D590798AECC3A4DDE103F07CCA7DCDE57E87390A5746C1C53887D27A2ED8EB6C1177064A2425388692055CE66', },
    failOnStatusCode: false
  })
}

export { deleteContacts };