import React, { Component } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';

function ProductList() {
  return (
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          <img src=".\images\ad1.png" alt="리스트용품광고" className="ad" />
          <div className="listTitle">
            <h1 className="listTitleText">면도/제모용품</h1>
            <div className="productListBox">
              <div className="productListMenu">
                총 9개
                <select className="sorting" onchange="myFunction()">
                  <option value="newProduct">신상품</option>
                  <option value="highPriceProduct">높은가격</option>
                  <option value="lowPriceProduct">낮은가격</option>
                  <option value="bestProduct">인기상품</option>
                </select>
              </div>
              <div className="productList">
                <ul>
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
                  <li>
                    <ProductCard />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
