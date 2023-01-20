import * as DELETEDeals from '../requests/DELETEDeals.request.cy';
import * as GETDeals from '../requests/GETDeals.request.cy';
import * as POSTDeals from '../requests/POSTDeals.request.cy';

describe('DELETE Deals', () => {
  it('Deletar um negocio', () => {
    GETDeals.allDeals().then((resAllDeals) => {
      DELETEDeals.deleteDeals(resAllDeals.body[1].Id).should((resDeleteDeals) => {
        expect(resDeleteDeals.status).to.eq(200);
      })
    })
  });

  it('Criar e excluir um negocio', () => {
    POSTDeals.addDeals().then((resAddDeals) => {
      DELETEDeals.deleteDeals(resAddDeals.body.Id).should((resDeleteDeals) => {
        expect(resDeleteDeals.status).to.eq(200)
      })
    })
  });
});