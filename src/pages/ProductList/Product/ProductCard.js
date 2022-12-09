import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

function ProductCard(props) {
  const {
    thumbnailLink,
    thumbnailImage,
    productName,
    productPrice,
    productInformation,
  } = props;

  return (
    <productCard>
      <div className="productCardList">
        <div className="thumbnail">
          <Link to={thumbnailLink}>
            <img
              className="thumbnailImage"
              src={thumbnailImage}
              alt={productName}
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
          <div className="productName">{productName}</div>
          <div className="productPrice">{productPrice}</div>
          <div className="productInformation">{productInformation}</div>
        </div>
      </div>
    </productCard>
  );
}

export default ProductCard;
