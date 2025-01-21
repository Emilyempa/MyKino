import { expect, test } from '@jest/globals';
import request from 'supertest';

import app from '../index.js';

test('/1 page shows right title', async () => {
  const response = await request(app).get('/1').expect('Content-Type', /html/).expect(200);

  expect(response.text).toMatch('Isle of dogs');
});

test('/5 page shows right title', async () => {
  const response = await request(app).get('/5').expect('Content-Type', /html/).expect(200);

  expect(response.text).toMatch('The Muppets');
});
