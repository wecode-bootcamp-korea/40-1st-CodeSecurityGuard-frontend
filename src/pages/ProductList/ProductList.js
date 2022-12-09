import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/data/MOCK_DATA.json', { method: 'GET' })
      .then(result => result.json())
      .then(data => setProduct(data));
  }, []);

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
                  {product.map(products => {
                    return (
                      <li id={products.id}>
                        <ProductCard
                          thumbnailLink={products.thumbnailLink}
                          thumbnailImage={products.thumbnailImage}
                          productName={products.productName}
                          productPrice={products.productPrice}
                          productInformation={products.productInformation}
                        />
                      </li>
                    );
                  })}
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
