import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../api/config';
import Modal from '../../../components/Modal/Modal';
import './ProductCard.scss';

function ProductCard(props) {
  const { id, thumbnailImageUrl, name, price, discountedPrice, description } =
    props;

  const [ModalOpened, setModalOpened] = useState(false);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('token') ?? '';
  const handleOpenModal = () => {
    setModalOpened(true);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
  };
  const moveToLogin = () => {
    navigate('/login');
  };
  const onCart = () => {
    if (!accessToken) {
      alert('장바구니를 사용하시려면 로그인을 하셔야됩니다.');
      moveToLogin();
    }
    fetch(`${BASE_URL}/carts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
      body: JSON.stringify({
        productId: id,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(() => {
        handleOpenModal();
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div>{ModalOpened && <Modal handleCloseModal={handleCloseModal} />}</div>
      <div className="productCardList">
        <div className="thumbnail">
          <Link to={`/productdetail/${id}`}>
            <img
              className="thumbnailImage"
              src={thumbnailImageUrl}
              alt={name}
              onClick={() => window.scrollTo({ top: 0 })}
            />
          </Link>

          <img
            className="cartImage"
            src="/images/carticonimage.jpg"
            alt="카트아이콘"
            onClick={onCart}
          />
        </div>

        <div className="description">
          <div className="productName">{name}</div>
          <div className="productPrice">{Number(`${price}`)}원</div>
          <div className="discountedPrice">{discountedPrice}</div>
          <div className="productInformation">{description}</div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
