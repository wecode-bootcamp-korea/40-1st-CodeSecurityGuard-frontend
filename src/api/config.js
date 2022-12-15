//TODO: api 수정될 때마다 넣어주기
export const BASE_URL = 'http://10.58.52.222:8000';

export const api = {
  signin: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  //조회: "keywordInQuotations"가 (name || description) 안에 들어간 모든 제품 정보
  search: `${BASE_URL}/search?keyword="desc1"`,
  //조회: 모든 제품 정보
  list: `${BASE_URL}/products`,
  //조회: 제품 한개의 정보
  product: `${BASE_URL}/products/1`,
  //조회: 카테고리 한가지의 모든 제품 정보
  category: `${BASE_URL}/category/3`,
  //조회: 서브-카테고리 한가지의 모든 제품 정보
  subcategory: `${BASE_URL}/subCategory/3`,
  detail: id => `${BASE_URL}/products/${id}`,
};
