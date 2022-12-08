import React, { Component } from 'react';
import './ProductList.scss';
import Product from './Product/ProductCard';

function ProductList() {
  return (
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          <div className="listTitle">
            <div className="productListBox">
              <div className="productListMenu">갯수 정렬기능</div>
              <div className="productList">
                <ul>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
                  </li>
                  <li>
                    <Product />
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
