import * as DELETEContatcs from '../requests/DELETEContacts.request.cy';
import * as GETContacts from '../requests/GETContacts.request.cy';
import * as POSTContatcs from '../requests/POSTContacts.request.cy';

describe('DELETE Contacts', () => {
  it('Deletar um contato', () => {
    GETContacts.allContacts().then((resAllContacts) => {
      DELETEContatcs.deleteContacts(resAllContacts.body[1].Id).should((resDeleteContacts) => {
        expect(resDeleteContacts.status).to.eq(200);
      })
    })
  });

  it('Criar e excluir um contato', () => {
    POSTContatcs.addContacts().then((resAddContacts) => {
      DELETEContatcs.deleteContacts(resAddContacts.body.Id).should((resDeleteContacts) => {
        expect(resDeleteContacts.status).to.eq(200)
      })
    })
  });
});