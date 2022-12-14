import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';
import { useParams } from 'react-router-dom';
import CategoryList from './Product/CategoryList';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const params = useParams();
  const param = params.value;
  const arr = ['2', '21', '22', '23', '24', '25'];

  // useEffect(() => {
  //   fetch('http://10.58.52.118:8000/products/${params.value}')
  //     .then(response => response.json())
  //     .then(result => setProduct(result.data));
  // }, []);

  useEffect(() => {
    fetch(`/data/MOCK_DATA${param}.json`)
      .then(result => result.json())
      .then(data => setProduct(data));
  }, []);

  useEffect(() => {
    fetch(`/data/CATE_MOCK_DATA${param}.json`)
      .then(result => result.json())
      .then(data => setSubCategory(data));
  }, []);

  return (
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          {param === '1' ? null : param === '3' ? (
            <img src="/images/ad1.jpeg" alt="면도기용품배너" className="ad" />
          ) : arr.includes(param) ? (
            <img src="/images/ad2.jpeg" alt="영양제용품배너" className="ad" />
          ) : (
            <img src="/images/ad3.jpeg" alt="스킨케어용품배너" className="ad" />
          )}
        </div>

        <div className="listTitle">
          {/* {mainname} */}
          {param === '1' ? (
            <p>전체보기</p>
          ) : param === '3' ? (
            <p>면도기</p>
          ) : arr.includes(param) ? (
            <p>영양제</p>
          ) : (
            <p>스킨케어</p>
          )}
        </div>

        {subCategory.length > 1 && (
          <div className="subCategoryBox">
            <ul>
              {subCategory.map(subCategories => {
                return (
                  <CategoryList
                    key={subCategories.id}
                    name={subCategories.name}
                    url={subCategories.url}
                  />
                );
              })}
            </ul>
          </div>
        )}
        <div className="productListBox">
          <div className="productListMenu">
            총 {product.length}개
            <select className="sorting">
              <option value="newProduct">신상품</option>
              <option value="highPriceProduct">높은가격</option>
              <option value="lowPriceProduct">낮은가격</option>
              <option value="bestProduct">인기상품</option>
            </select>
          </div>
          <div className="productList">
            <ul>
              {product.map(products => {
                return (
                  <li key={products.id}>
                    <ProductCard
                      id={products.id}
                      thumbnailImageUrl={products.thumbnailImageUrl}
                      name={products.name}
                      price={products.price}
                      description={products.description}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
