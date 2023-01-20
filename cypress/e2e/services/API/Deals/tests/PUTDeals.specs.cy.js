import * as PUTDeals from '../requests/PUTDeals.request.cy';
import * as GETDeals from '../requests/GETDeals.request.cy';
import * as POSTDeals from '../requests/POSTDeals.request.cy';

describe('PUT Deals', () => {
  it('Alterar um negocio', () => {
    GETDeals.allDeals().then((resAllDeals) => {
      PUTDeals.changeDeals(resAllDeals.body[1].Id).should((resChangeDeals) => {
        expect(resChangeDeals.status).to.eq(200);
        expect(resChangeDeals.body).to.be.not.null;
        expect({ Title: 'Teste API PUT' }).to.deep.equal({ Title: 'Teste API PUT' });
      })
    })
  });

  it('Criar e alterar um negocio', () => {
    POSTDeals.addDeals().then((resAddDeals) => {
      PUTDeals.changeDeals(resAddDeals.body.Id).should((resChangeDeals) => {
        expect(resChangeDeals.status).to.eq(200);
        expect(resChangeDeals.body).to.be.not.null;
        expect({ Title: 'Teste API PUT' }).to.deep.equal({ Title: 'Teste API PUT' });
      })
    })
  });
});