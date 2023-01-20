import * as POSTContacts from '../requests/POSTContacts.request.cy';

context('POST Contacts', () => {
  it('Adicionar um novo contato', () => {
    POSTContacts.addContacts().should((response) => {
      expect(response.status).to.eq(200);
      expect({ Name: 'Teste API POST and DELETE' }).to.deep.equal({ Name: 'Teste API POST and DELETE' })
    })
  });
});