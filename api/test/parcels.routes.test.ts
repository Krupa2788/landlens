// HTTP tests with supertest against createApp() — no port needed.
describe('parcels routes', () => {
  it.todo('POST /parcels with a valid body returns 201');
  it.todo('POST /parcels with an invalid body returns 400 (from the OpenAPI validator)');
  it.todo('GET /parcels/{id} for an unknown id returns 404');
});
