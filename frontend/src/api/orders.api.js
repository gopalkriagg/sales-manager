import httpClient from './httpClient';

const END_POINT = 'clients';

const getOrdersForClient = clientId => {
  return httpClient.get(`${END_POINT}/${clientId}/orders`);
};

export { getOrdersForClient };
