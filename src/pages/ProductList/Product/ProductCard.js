import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

function ProductCard(props) {
  const { thumbnailImageUrl, name, price, discountedPrice, description } =
    props;

  return (
    <div className="productCardList">
      <div className="thumbnail">
        <Link to="productdetail/">
          <img className="thumbnailImage" src={thumbnailImageUrl} alt={name} />
        </Link>

        <Link to="#">
          <img
            className="cartImage"
            src="./images/carticonimage.jpg"
            alt="카트아이콘"
          />
        </Link>
      </div>

      <div className="description">
        <div className="productName">{name}</div>
        <div className="productPrice">{price}</div>
        <div className="discountedPrice">{discountedPrice}</div>
        <div className="productInformation">{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
