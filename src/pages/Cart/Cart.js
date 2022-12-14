import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartItem from './components/CartItem';

const Cart = () => {
  //GET으로 받아온 장바구니 리스트 set
  const [cartList, setCartList] = useState([]);
  const accessToken = localStorage.getItem('Token');

  //장바구니 데이터 GET 해오기
  const getCartData = () => {
    const data = fetch('http://10.58.52.191:8000/carts', {
      method: 'GET',
      header: { authorization: accessToken },
    })
      .then(response => response.json())
      .then(result => setCartList(data.getCartData));
  };
  useEffect(() => {
    getCartData();
  }, []);
  const { id, name, img, price, amount } = cartList;

  // const deleteItem = id => {
  //   fetch(`http://10.58.52.158:3002/cart/cartId/${cartId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: accessToken,
  //     },
  //   }).then(res => {
  //     if (res.status === 201) {
  //       alert('상품이 장바구니에서 삭제되었습니다');
  //       setCartList(cartList.filter(cartList => id !== cartList.id));
  //     } else {
  //       alert('다시 시도해주세요');
  //     }
  //   });
  // };

  // 구매하기 버튼 후 어떤 로직으로 가는지 상의하기
  // ex. 모달창 구매하시겠습니까? -> y -> POST -> gotomain?
  const handleClickPurchase = () => {};

  return (
    <div className="Wrap">
      <div className="cartTitleWrap">
        <h2>장바구니</h2>
      </div>

      <div className="orderSelect">
        <div className="checkboxWrap">
          <div className="checkbox">
            <input
              id="countCheck"
              type="checkbox"
              className="checkAllList"
              checked={true}
            />
          </div>
          <div className="countCheck">
            <span>
              전체선택{cartList.amout}/{cartList.amout}
            </span>
          </div>
        </div>
        <div className="vl" />
        <div className="sellectButton">
          <span>선택삭제</span>
        </div>
      </div>

      <div className="orderWrap">
        <div className="orderListWrap">
          <ul className="orderList">
            {cartList.map(cart => (
              <CartItem key={cart.id} {...cart} />
            ))}
            {/* {DUMMY_CART_LIST.map(cart => (
              <CartItem key={cart.id} {...cart} />
            ))} */}
          </ul>
        </div>
        <div className="orderAside">
          <div className="orderReceipt">
            <div className="receiptHeading">
              <div className="totalPrice">
                <div>합계</div>
                <span>0원</span>
              </div>
              <div className="discountPrice">
                <div>할인금액</div>
                <span>- 0원</span>
              </div>
              <div className="deliveryFee">
                <div>배송비</div>
                <span>+ 0원</span>
              </div>
            </div>
            <div className="receiptBottom">
              <div>결제예정금액</div>
              <div className="totalAmount">
                <span>0원</span>
              </div>
            </div>
          </div>
          <button className="paymentButton" onClick={handleClickPurchase}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const DUMMY_CART_LIST = [
  {
    id: 1,
    name: '로오션',
    price: 13000,
    amount: 1,
  },
  {
    id: 2,
    name: '샴푸',
    price: 20000,
    amount: 1,
  },
  {
    id: 3,
    name: '면도기',
    price: 36000,
    amount: 1,
  },
];
