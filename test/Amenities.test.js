const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const should = chai.should();
const AmenitiesService = require('../src/services/AmenitiesService');
const Routes = require('../src/routes/Routes');

const { expect } = chai;
chai.use(chaiHttp);
describe('AmenitiesService', () => {
  it('tests the response fetch', async () => {
    const jsonResponse = require('../public/data.json');
    const response = await new AmenitiesService().getAmenitiesList();
    expect(response).to.eq(jsonResponse);
  });
});
describe('/amenties list', () => {
  it('it should GET all the amenties', (done) => {
    chai.request(new Routes())
      .get('/amenties')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
