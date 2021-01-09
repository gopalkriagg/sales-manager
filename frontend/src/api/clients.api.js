import httpClient from './httpClient';

const END_POINT = 'clients';

const storeClient = name => {
  console.log(httpClient.defaults);
  return httpClient.post(END_POINT, {
    name,
  });
};

export { storeClient };
