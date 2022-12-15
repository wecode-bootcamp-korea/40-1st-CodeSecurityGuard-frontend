import React, { Component } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';
import { useParams } from 'react-router-dom';
import CategoryList from './Product/CategoryList';


function ProductList() {
  return (
    <>
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          <img src="/images/ad1.png" alt="리스트용품배너" className="ad" />
        </div>
        <div className="listTitle">
          <h1 className="listTitleText">면도/제모용품</h1>
        </div>
        <div className="subCategoryBox">
          {/* <ul>
            {data.map(e => {
              return <CategoryList key={e.id} name={e.name} url={e.url} />;
            })}
          </ul> */}
        </div>
        <div className="productListBox">
          <div className="productListMenu">
            총 {product.length}개
            <select className="sorting" onChange="handleChange">
              <option value="newProduct">신상품</option>
              <option value="highPriceProduct">높은가격</option>
              <option value="lowPriceProduct">낮은가격</option>
              <option value="bestProduct">인기상품</option>
            </select>
          </div>
          <div className="productList">
            <ul>
              {/* {product.map(products => {
                return (
                  <li key={products.id}>
                    <ProductCard
                      id={products.id},
                      thumbnailImageUrl={products.thumbnailImageUrl},
                      name={products.name},
                      price={products.price},
                      description={products.description}/>
                  </li>
                )})} */}
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                  <li>
                    <ProductCard />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      // </div>
    // </div>
    </>
  );
}

export default ProductList;
