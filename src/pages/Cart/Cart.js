import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, BASE_URL } from '../../api/config';
import CartEmpty from './components/CartEmpty';
import CartItem from './components/CartItem';
import './Cart.scss';

const Cart = id => {
  const [cartList, setCartList] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const navigate = useNavigate();
  const hasCart = cartList.length;
  const accessToken = localStorage.getItem('token') ?? '';
  const userPoint = cartList.length !== 0 ? cartList[0].point : 0;

  const totalSumPrice = cartList?.reduce(
    (prev, curr) => prev + parseInt(curr.price) * parseInt(curr.quantity),
    sumPrice
  );

  const getCartData = () => {
    const data = fetch(api.cart, {
      method: 'GET',
      headers: { authorization: accessToken },
    })
      .then(response => response.json())
      .then(data => setCartList(data.data));
  };
  useEffect(() => {
    getCartData();
  }, []);

  const deleteItem = id => {
    fetch(`${BASE_URL}/carts/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: accessToken,
      },
    }).then(res => {
      if (res.status === 204) {
        alert('상품이 장바구니에서 삭제되었습니다');
        setCartList(cartList.filter(cartList => id !== cartList.cartId));
      } else {
        alert('다시 시도해주세요');
      }
    });
  };

  const handleClickPurchase = () => {
    fetch(api.order, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
      body: JSON.stringify({
        userId: cartList[0].userId,
        price: totalSumPrice,
      }),
    })
      .then(res => res.json())
      .then(() => {
        alert('구매가 완료되었습니다!');
        goToMainPage();
      });
  };

  const goToMainPage = () => {
    navigate('/');
  };
  return (
    <div className="wrap">
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
              checked
            />
          </div>
          <div className="countCheck">
            <span>
              전체선택 ({cartList.length}/{cartList.length})
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
          {hasCart === 0 ? (
            <CartEmpty />
          ) : (
            <ul>
              {cartList.map((cart, i) => (
                <CartItem key={i} {...cart} deleteItem={deleteItem} />
              ))}
            </ul>
          )}
        </div>
        <div className="orderAside">
          <div className="orderReceipt">
            <div className="receiptHeading">
              <div className="totalPrice">
                <div>합계</div>
                <span>{totalSumPrice.toLocaleString()}원</span>
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
              <div className="vaildPoint">
                <div>사용가능 포인트</div>
                <div className="totalPoint">
                  <span>
                    {userPoint ? Math.floor(userPoint).toLocaleString() : '0'}원
                  </span>
                </div>
              </div>
              <div className="usingPoint">
                <div>결제예정 포인트</div>
                <div className="totalAmount">
                  <span>{totalSumPrice.toLocaleString()}원</span>
                </div>
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
