import * as GETContacts from '../requests/GETContacts.request.cy';

describe('GET Contacts', () => {
  it('Listar todos os contatos', () => {
    GETContacts.allContacts().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
    })
  });
});