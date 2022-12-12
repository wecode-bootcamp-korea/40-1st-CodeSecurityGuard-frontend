import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

function ProductCard() {
  return (
    <productCard>
      <div className="productCardList">
        <div className="thumbnail">
          <Link to="1">
            <img
              className="thumbnailImage"
              src="./images/1.jpg"
              alt="상품이름"
            />
          </Link>

          <Link to="2">
            <img
              className="cartImage"
              src="./images/carticonimage.jpg"
              alt="카트아이콘"
            />
          </Link>
        </div>

        <div className="description">
          <div className="productName">상품 이름</div>
          <div className="productPrice">상품 가격</div>
          <div className="productDetail">상품 설명</div>
        </div>
      </div>
    </productCard>
  );
}

export default ProductCard;
