import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import './MainProductCard.scss';

function MainProductCard(props) {
  const [ModalOpened, setModalOpened] = useState(false);
  const { id, thumbnailImageUrl, name, price } = props;
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
      alert('로그인 페이지로 이동합니다');
      moveToLogin();
    }

    fetch('http://10.58.52.222:8000/carts/', {
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
      <div className="mainProductCardList">
        <div className="thumbnail">
          <Link to={`/productdetail/${id}`}>
            <img
              className="thumbnailImage"
              src={thumbnailImageUrl}
              alt={name}
            />
          </Link>

          <Link to="#">
            <img
              onClick={onCart}
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
    </>
  );
}

export default MainProductCard;
