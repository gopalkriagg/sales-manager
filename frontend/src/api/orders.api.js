import httpClient from './httpClient';

const END_POINT = 'orders';

const getOrdersForClient = clientId => {
  return httpClient.get(`clientd/${clientId}/orders`);
};

const storeOrder = (clientId, date) => {
  return httpClient.post(END_POINT, {
    clientId,
    date,
  });
};

export { getOrdersForClient, storeOrder };
