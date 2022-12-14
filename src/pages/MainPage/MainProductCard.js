import React from 'react';
import { Link } from 'react-router-dom';
import './MainProductCard.scss';

function MainProductCard(props) {
  const { id, thumbnailImageUrl, name, price } = props;

  return (
    <div className="mainProductCardList">
      <div className="thumbnail">
        <Link to={`/productdetail/${id}`}>
          <img className="thumbnailImage" src={thumbnailImageUrl} alt={name} />
        </Link>

        <Link to="#">
          <img
            className="cartImage"
            src="/images/carticonimage.jpg"
            alt="카트아이콘"
          />
        </Link>
        <div className="description">
          <div className="productName">{name}</div>
          <div className="productPrice">
            {Math.floor(price).toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProductCard;
