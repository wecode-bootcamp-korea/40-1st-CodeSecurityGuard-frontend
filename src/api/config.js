export const BASE_URL = 'http://10.58.52.121:8000';

export const api = {
  signin: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,

  search: `${BASE_URL}/search?keyword=`,

  list: `${BASE_URL}/products`,

  product: `${BASE_URL}/products/`,

  category: `${BASE_URL}/category/3`,

  subcategory: `${BASE_URL}/subCategory/3`,
  detail: id => `${BASE_URL}/products/${id}`,
  cart: `${BASE_URL}/carts`,
  order: `${BASE_URL}/orders`,
};
