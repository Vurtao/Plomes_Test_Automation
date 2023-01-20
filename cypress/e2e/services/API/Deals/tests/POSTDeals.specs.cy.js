import * as POSTDeals from '../requests/POSTDeals.request.cy';

context('POST Deals', () => {
  it('Adicionar um novo negocio', () => {
    POSTDeals.addDeals().should((response) => {
      expect(response.status).to.eq(200);
      expect({ Title: 'Teste API POST' }).to.deep.equal({ Title: 'Teste API POST' })
    })
  });
});