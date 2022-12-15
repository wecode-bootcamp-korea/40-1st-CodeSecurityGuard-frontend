import React, { useState } from 'react';
import './CartItem.scss';

const CartItem = props => {
  console.log(props);
  const {
    cartId: id,
    name,
    thumbnailImageUrl,
    price,
    quantity,
    deleteItem,
  } = props;

  const [currentAmount, setCurrentAmount] = useState(quantity);

  const plusQuantity = () => {
    setCurrentAmount(prev => prev + 1);
  };
  const minusQuantity = () => {
    if (currentAmount <= 1) {
      return;
    }
    setCurrentAmount(prev => prev - 1);
  };

  return (
    <div className="cartItemWrapper">
      <li className="cartItem">
        <div className="cartListWrapper">
          <div className="checkBoxWrapper">
            <input name={id} type="checkbox" checked />
          </div>
          <div className="itemImg">
            <img key={id} src={thumbnailImageUrl} alt="itemImg" />
          </div>
          <div className="cartItemInfo">
            <div className="itemNameWrapper">{name}</div>
            <div className="qtyWrapper">
              <div className="qtyButtonWrapper">
                <button onClick={minusQuantity}>−</button>
                <p className="amount">{quantity}</p>
                <button onClick={plusQuantity}>+</button>
              </div>
              <div className="itemPriceWrapper">
                {Math.floor(price).toLocaleString()}원
              </div>
              <div className="deleteBtn">
                <button onClick={e => deleteItem(id)} className="deleteButton">
                  ✕
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
