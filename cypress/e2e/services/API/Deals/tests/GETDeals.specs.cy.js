import * as GETDeals from '../requests/GETDeals.request.cy';

describe('GET Deals', () => {
  it('Listar todos os negocios', () => {
    GETDeals.allDeals().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
    })
  });
});