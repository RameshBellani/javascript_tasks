import supertest from 'supertest';
import { app } from './index';

const request = supertest(app);

describe('API Endpoints', () => {
  it('GET /api/products should return a list of products', async () => {
    const response = await request.get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); 
  });

  it('GET /api/products/:id should return details of a specific product', async () => {
    const response = await request.get('/api/products/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    
  });
});
