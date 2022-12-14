import React, { Component, useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';
import { useParams } from 'react-router-dom';
import SubCategoryList from './Product/SubCategoryList';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const allArr = ['all1'];
  const medicineArr = [
    'category1',
    'subCategory1',
    'subCategory2',
    'subCategory3',
    'subCategory4',
    'subCategory5',
  ];
  const shaverArr = ['category2'];

  const params = useParams();
  const paramv = params.value;
  const parami = params.id;

  useEffect(() => {
    paramv.length < 5
      ? fetch('http://10.58.52.191:8000/products')
          .then(response => response.json())
          .then(result => setProduct(result.data))
      : fetch(`http://10.58.52.191:8000/products/${paramv}/${parami}`)
          .then(response => response.json())
          .then(result => setProduct(result.data));
  }, []);

  useEffect(() => {
    fetch(`/data/${paramv}${parami}.json`)
      .then(result => result.json())
      .then(data => setSubCategory(data));
  }, []);

  return (
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          {allArr.includes(`${paramv}${parami}`) ? (
            ''
          ) : medicineArr.includes(`${paramv}${parami}`) ? (
            <img className="ad" src="/images/ad1.jpeg" alt="영양제" />
          ) : shaverArr.includes(`${paramv}${parami}`) ? (
            <img className="ad" src="/images/ad2.jpeg" alt="면도/제모용품" />
          ) : (
            <img className="ad" src="/images/ad3.jpeg" alt="스킨케어" />
          )}
        </div>

        {allArr.includes(`${paramv}${parami}`) ? (
          <div className="listTitle">전체보기</div>
        ) : medicineArr.includes(`${paramv}${parami}`) ? (
          <div className="listTitle">영양제</div>
        ) : shaverArr.includes(`${paramv}${parami}`) ? (
          <div className="listTitle">면도/제모용품</div>
        ) : (
          <div className="listTitle">스킨케어</div>
        )}

        {subCategory.length > 1 && (
          <div className="subCategoryBox">
            <ul>
              {subCategory.map(subCategories => {
                return (
                  <SubCategoryList
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
