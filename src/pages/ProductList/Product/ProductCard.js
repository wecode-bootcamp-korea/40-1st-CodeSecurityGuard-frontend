import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

function ProductCard(props) {
  const { id, thumbnailImageUrl, name, price, discountedPrice, description } =
    props;

  return (
    <div className="productCardList">
      <div className="thumbnail">
        <Link to={`/productdetail/${id}`}>
          <img className="thumbnailImage" src={thumbnailImageUrl} alt={name} />
        </Link>

        <img
          className="cartImage"
          src="/images/carticonimage.jpg"
          alt="카트아이콘"
        />
      </div>

      <div className="description">
        <div className="productName">{name}</div>
        <div className="productPrice">{Number(`${price}`)}원</div>
        <div className="discountedPrice">{discountedPrice}</div>
        <div className="productInformation">{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
