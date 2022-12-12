import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';

function ProductList() {
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch('http://10.58.52.118:8000/products/')
  //     .then(response => response.json())
  //     .then(result => setProduct(result.data));
  // }, []);

  useEffect(() => {
    fetch('./data/MOCK_DATA.json')
      .then(result => result.json())
      .then(data => setProduct(data));
  }, []);

  // const [highPriceProduct, setHighPriceProduct] = useState();
  // function handleChange(event) {
  //   setHighPriceProduct(event.target.value);
  // }

  return (
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          <img src=".\images\ad1.png" alt="리스트용품광고" className="ad" />
          <div className="listTitle">
            <h1 className="listTitleText">면도/제모용품</h1>
            <div className="productListBox">
              <div className="productListMenu">
                {/* 총 9개
                <select className="sorting" onchange="handleChange">
                  <option value="newProduct">신상품</option>
                  <option value="highPriceProduct">높은가격</option>
                  <option value="lowPriceProduct">낮은가격</option>
                  <option value="bestProduct">인기상품</option>
                </select> */}
              </div>
              <div className="productList">
                <ul>
                  {product.map(products => {
                    return (
                      <li key={products.id}>
                        <ProductCard
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
      </div>
    </div>
  );
}

export default ProductList;
