import * as PUTContacts from '../requests/PUTContacts.request.cy';
import * as GETContacts from '../requests/GETContacts.request.cy';
import * as POSTContatcs from '../requests/POSTContacts.request.cy';

describe('PUT Contacts', () => {
  it('Alterar um contato', () => {
    GETContacts.allContacts().then((resAllContacts) => {
      PUTContacts.changeContacts(resAllContacts.body[1].Id).should((resChangeContacts) => {
        expect(resChangeContacts.status).to.eq(200);
        expect(resChangeContacts.body).to.be.not.null;
        expect({ Name: 'Teste API PUT' }).to.deep.equal({ Name: 'Teste API PUT' });
      })
    })
  });

  it('Criar e alterar um contato', () => {
    POSTContatcs.addContacts().then((resAddContacts) => {
      PUTContacts.changeContacts(resAddContacts.body.Id).should((resChangeContacts) => {
        expect(resChangeContacts.status).to.eq(200);
        expect(resChangeContacts.body).to.be.not.null;
        expect({ Name: 'Teste API PUT' }).to.deep.equal({ Name: 'Teste API PUT' });
      })
    })
  });
});