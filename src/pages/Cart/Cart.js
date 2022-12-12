import { check } from 'prettier';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import CartList from '../CartList/CartList';
import './Cart.scss';

function Cart() {
  return (
    <div className="Wrap">
      <div className="cartTitleWrap">
        <h2>장바구니</h2>
      </div>

      <div className="orderSelect">
        <input className="checkAllList" type="checkbox" />

        <label className="countCheck">
          전체선택(<p>0</p>/<p>0</p>)
        </label>
        <a className="checkOneList">선택삭제</a>
      </div>

      <div className="orderWrap">
        <div className="orderListWrap">
          {/* TODO:창훈님 만드신 상품카드, 리스트 참고해서 구현하면 될 것 같습니다!! */}
          {/* 1. 컴포넌트로 만들어서 넣기 / 2.map 돌리기 */}
          <ul className="orderList" />
        </div>
        <div className="orderAside">
          <div className="orderReceipt">
            {RECEIPT_FORM.map(info => {
              return (
                <div className="ReceiptTop" key={info.id} name={info.name}>
                  <div className="amountTitle">{info.amountTitle} </div>
                  <div className="amountNumber">
                    {info.mark}
                    {info.amount}원
                  </div>
                </div>
              );
            })}
            <div className="ReceiptBottom">
              <div>결제예정금액</div>
              <div className="totalAmount">
                <p>0 </p> 원
              </div>
            </div>
          </div>
          <button className="paymentButton">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

//더 잘게 쪼개서 + - 원 나누기
const RECEIPT_FORM = [
  {
    id: 1,
    name: 'totalAmount',
    amountTitle: '합계',
    amount: '0',
  },
  {
    id: 2,
    name: 'discountAmount',
    amountTitle: '할인금액',
    mark: '- ',
    amount: '0',
  },
  {
    id: 3,
    name: 'deliveryFee',
    amountTitle: '배송비',
    mark: '+ ',
    amount: '0',
  },
];

const DUMMY_CART_LIST = [
  {
    id: 1,
    name: '로오션',
    price: 13000,
    amount: 1,
    isChecked: true,
  },
  {
    id: 2,
    name: '샴푸',
    price: 20000,
    amount: 1,
    isChecked: true,
  },
  {
    id: 3,
    name: '면도기',
    price: 36000,
    amount: 1,
    isChecked: true,
  },
];
