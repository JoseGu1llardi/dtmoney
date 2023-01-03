import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { Model, createServer } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Application development",
          type: "deposit",
          category: "Development",
          amount: 10000,
          createdAt: new Date('2022-12-15 14:00:00'),
        },
        {
          id: 2,
          title: "House rent",
          type: "withdraw",
          category: "Housing/Survival",
          amount: 1500,
          createdAt: new Date('2022-12-05 09:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
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
