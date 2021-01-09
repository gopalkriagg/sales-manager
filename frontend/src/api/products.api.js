import httpClient from './httpClient';

const END_POINT = 'products';

const getProducts = () => {
  return httpClient.get(END_POINT);
};

const storeProduct = (name, price) => {
  return httpClient.post(END_POINT, {
    name,
    price,
  });
};

export { getProducts, storeProduct };
