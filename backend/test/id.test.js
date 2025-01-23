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

test('when user tries to access a non-existing film page', async () => {
  const response = await request(app).get('/1000').expect('Content-Type', /html/).expect(404);

  expect(response.text).toMatch('404 - Page Not Found');
});
