import React from 'react';
import './Modal.scss';

const Modal = ({ handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modalText">장바구니에 상품을 담았습니다. </div>
      <button className="modalCloseBtn" onClick={handleCloseModal}>
        확인
      </button>
    </div>
  );
};

export default Modal;
