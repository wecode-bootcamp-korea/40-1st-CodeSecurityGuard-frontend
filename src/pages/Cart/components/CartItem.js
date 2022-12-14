import React, { useState } from 'react';
import './CartItem.scss';

const CartItem = ({ props }) => {
  //cart 구조분해할당, props로 가져오기
  const { cart } = props.cart;

  //cart props의 id를 가져오기 위해서?
  const deleteItem = props.deleteItem;
  const { id, name, img, price, amount } = cart;

  //현재 amount set해줌으로써 이후 fetch를 통해 수량변화가 있더라도 고정된다
  const [currentAmount, setCurrentAmount] = useState(amount);

  //async & await 넣기
  const plusQuantity = () => {
    setCurrentAmount(prev => prev + 1);
  };
  const minusQuantity = () => {
    if (currentAmount <= 1) {
      return;
    }
    setCurrentAmount(prev => prev - 1);
  };

  // const handleClickDelete = () => {
  //   deleteItem(id);
  // };
  return (
    <div className="cartItemWrapper">
      <li className="cartItem">
        <div className="cartListWrapper">
          <div className="checkBoxWrapper">
            <input name={id} type="checkbox" checked />
          </div>
          <div className="itemImg">
            <img key={id} src={img} alt="itemImg" />
          </div>
          <div className="cartItemInfo">
            <div className="itemNameWrapper">{name}</div>
            <div className="qtyWrapper">
              <div className="qtyButtonWrapper">
                <button onClick={minusQuantity}>-</button>
                <p className="amount">{currentAmount}</p>
                <button onClick={plusQuantity}>+</button>
              </div>
              <div className="itemPriceWrapper">{price}원</div>
              <div className="deleteBtn">
                <button onClick={deleteItem} className="deleteButton">
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
