import httpClient from './httpClient';

const END_POINT = 'clients';

const getClients = () => {
  return httpClient.get(END_POINT);
};

const getClient = (id) => {
  return httpClient.get(`${END_POINT}/${id}`);
}

const storeClient = name => {
  return httpClient.post(END_POINT, {
    name,
  });
};

export { getClients, getClient, storeClient };
