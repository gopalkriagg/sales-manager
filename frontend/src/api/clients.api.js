import httpClient from './httpClient';

const END_POINT = 'clients';

const getClients = () => {
  return httpClient.get(END_POINT);
};

const storeClient = name => {
  return httpClient.post(END_POINT, {
    name,
  });
};

export { getClients, storeClient };
