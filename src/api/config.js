//TODO: api 수정될 때마다 넣어주기
export const BASE_URL = 'http://10.58.52.118:8000';

export const api = {
  login: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  list: `${BASE_URL}/products`,
  detail: id => `${BASE_URL}/product/${id}`,
};
