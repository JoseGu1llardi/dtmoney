import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { Model, createServer } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ]
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return data;
    })
  }
});

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
