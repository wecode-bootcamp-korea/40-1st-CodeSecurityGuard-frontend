import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MenuTab from './MenuTab';
import './ProductDetail.scss';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantityValue, setQuantityValue] = useState(1);
  const [products, setProducts] = useState({});
  const params = useParams();
  const productId = params.id;
  const accessToken = localStorage.getItem('token');

  const moveToLogin = () => {
    navigate('/login');
  };

  const upQuantity = () => {
    setQuantityValue(prev => prev + 1);
  };

  const downQuantity = () => {
    if (quantityValue === 1) {
      alert('최소 주문수량은 1개 입니다');
    } else {
      setQuantityValue(prev => prev - 1);
    }
  };

  useEffect(() => {
    fetch(`/data/MOCK_DATA.json`)
      .then(response => response.json())
      .then(result => setProducts(result[productId]));
  }, [productId]);

  const onCart = () => {
    if (!accessToken) {
      alert('로그인 페이지로 이동합니다');
      moveToLogin();
    }
  };

  const { id, name, thumbnailImageUrl, description, price, ...others } =
    products;

  return (
    <>
      <div className="productDetailContainer">
        <div className="productDetailContentsBox">
          <div className="productDetailArea">
            <div className="productDetailImageArea">
              <img alt="productImage" src={thumbnailImageUrl} />
            </div>
            <div className="productDetailInfoArea">
              <h3 className="productDetailBrandName">{name}</h3>
              <h1 className="productDetailProductName">{name}</h1>
              <span className="productDetailDescription">{description}</span>
              <div className="productDetailPriceReviewBox">
                <div className="productDetailPrice">
                  {[price].toLocaleString()}원
                </div>
              </div>
              <div className="productDetailQuantityBox">
                <div className="productDetailQuantity">
                  <button className="downQuantityBtn" onClick={downQuantity}>
                    -
                  </button>
                  <input
                    className="productDetailQuantityValue"
                    type="text"
                    value={quantityValue}
                    readOnly
                  />
                  <button className="upQuantityBtn" onClick={upQuantity}>
                    +
                  </button>
                </div>
              </div>
              <div className="productDetailTotalPriceBox">
                <span>총 상품금액:</span>
                <p className="productDetailTotalPrice">
                  {[price * quantityValue].toLocaleString()}원
                </p>
              </div>
              <div className="productDetailBtnBox">
                <button className="productDetailCartButton" onClick={onCart}>
                  장바구니
                </button>
                <button className="productDetailOrderButton">구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetailTab">
        <MenuTab />
      </div>
    </>
  );
};

export default ProductDetail;
