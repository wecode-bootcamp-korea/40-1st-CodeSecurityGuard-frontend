import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

const Modal = ({ handleCloseModal }) => {
  return (
    <ModalPortal>
      <div className="modal">
        <section className="modalBody">
          <div className="modalText">장바구니에 상품을 담았습니다. </div>
          <button className="modalCloseBtn" onClick={handleCloseModal}>
            확인
          </button>
        </section>
      </div>
    </ModalPortal>
  );
};

export default Modal;
